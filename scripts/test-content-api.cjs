// Compile only the API's dependency graph into a temporary directory; no test dependency.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { mkdtempSync, rmSync } = require("node:fs");
const { tmpdir } = require("node:os");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const output = mkdtempSync(path.join(tmpdir(), "omar-content-api-"));
process.on("exit", () => rmSync(output, { recursive: true, force: true }));
execFileSync(process.execPath, [require.resolve("typescript/bin/tsc"),
  "--outDir", output, "--rootDir", "app", "--module", "commonjs", "--target", "es2022",
  "--lib", "es2022,dom,dom.iterable", "--skipLibCheck", "--strict",
  "app/api/v1/content/route.ts", "app/api/v1/content/[slug]/route.ts",
  "app/api/v1/openapi.json/route.ts", "app/feed.json/route.ts", "app/newsletter/the-war-for-float.md/route.ts",
], { cwd: root, stdio: "inherit" });
const content = require(path.join(output, "data/content.js"));
const publications = require(path.join(output, "data/publications.js"));
const list = require(path.join(output, "api/v1/content/route.js"));
const detail = require(path.join(output, "api/v1/content/[slug]/route.js"));
const feed = require(path.join(output, "feed.json/route.js"));
const markdown = require(path.join(output, "newsletter/the-war-for-float.md/route.js"));
const spec = require(path.join(output, "api/v1/openapi.json/route.js"));
const request = (query = "", options) => new Request(`https://www.omarbakri.com/api/v1/content${query}`, options);

test("required publication lookup reports missing article metadata clearly", () => {
  const slug = "the-war-for-float";
  const index = publications.default.findIndex((item) => item.slug === slug);
  assert.notEqual(index, -1);
  assert.equal(publications.getRequiredPublication(slug), publications.default[index]);
  const [removed] = publications.default.splice(index, 1);
  try {
    const expected = { name: "Error", message: `Required publication "${slug}" is missing from the published inventory.` };
    assert.throws(() => publications.getRequiredPublication(slug), expected);
    assert.throws(() => content.articleMarkdown(), expected);
  } finally {
    publications.default.splice(index, 0, removed);
  }
});

test("catalog uses unique stable slugs, canonical ids and explicit rights", () => {
  assert.equal(content.contentItems.length, 6);
  assert.equal(new Set(content.contentItems.map((item) => item.slug)).size, 6);
  for (const item of content.contentItems) {
    assert.equal(item.id, item.canonicalUrl);
    assert.ok(Number.isFinite(Date.parse(item.publishedAt)));
    assert.equal(item.rights.license, "all-rights-reserved");
    assert.equal(item.rights.attributionRequired, true);
  }
});

test("filters and pagination compose, preserve query and end correctly", async () => {
  const result = await list.GET(request("?type=post&topic=payments&search=stack&limit=1")).json();
  assert.deepEqual(result.items.map((item) => item.slug), ["payment-stack-revenue"]);
  assert.equal(result.pagination.total, 1);
  assert.equal(result.pagination.next, null);
  const page = await list.GET(request("?type=post&limit=2")).json();
  assert.equal(page.pagination.total, 5);
  assert.equal(new URL(page.pagination.next).searchParams.get("type"), "post");
  assert.equal(new URL(page.pagination.next).searchParams.get("offset"), "2");
  const next = await list.GET(new Request(page.pagination.next)).json();
  assert.equal(next.pagination.offset, 2);
  assert.equal(new Set([...page.items, ...next.items].map((item) => item.id)).size, 4);
  assert.deepEqual((await list.GET(request("?type=news")).json()).items, []);
  assert.deepEqual((await list.GET(request("?offset=100")).json()).items, []);
});

test("invalid, unbounded, repeated and unknown query parameters return 400", async () => {
  for (const query of ["?limit=0", "?limit=101", "?limit=1.5", "?limit=NaN", "?offset=-1", "?offset=100001", "?type=other", "?topic=", "?search=", "?limit=1&limit=2", "?url=https://example.com", `?search=${"x".repeat(201)}`]) {
    const response = list.GET(request(query));
    assert.equal(response.status, 400, query);
    assert.equal(response.headers.get("cache-control"), "no-store");
    assert.equal((await response.json()).error.code, "invalid_query");
  }
});

test("full article shares Markdown with endpoint; external posts never invent bodies", async () => {
  const article = await detail.GET(request(), { params: { slug: "the-war-for-float" } }).json();
  const body = await markdown.GET(request()).text();
  assert.equal(article.availability, "full_text");
  assert.equal(article.content.text, body);
  assert.ok(body.includes("## The numbers that matter"));
  assert.ok(body.includes("## The fork"));
  assert.ok(body.endsWith("\n"));
  for (const item of content.contentItems.filter((item) => item.source.external)) {
    const result = await detail.GET(request(), { params: { slug: item.slug } }).json();
    assert.equal(result.availability, "excerpt_only");
    assert.equal(result.content, null);
    assert.equal(result.markdownUrl, null);
    assert.ok(result.canonicalUrl.startsWith("https://www.linkedin.com/"));
  }
  assert.equal(detail.GET(request(), { params: { slug: "unknown" } }).status, 404);
});

test("article full text survives a canonical URL change with its stable slug", () => {
  const publications = require(path.join(output, "data/publications.js")).default;
  const article = publications.find((item) => item.slug === "the-war-for-float");
  const originalHref = article.href;
  const modulePath = require.resolve(path.join(output, "data/content.js"));
  const originalModule = require.cache[modulePath];
  try {
    article.href = "/newsletter/a-new-canonical-url";
    delete require.cache[modulePath];
    const changed = require(modulePath).getContent(article.slug);
    assert.equal(changed.availability, "full_text");
    assert.equal(changed.canonicalUrl, "https://www.omarbakri.com/newsletter/a-new-canonical-url");
    assert.ok(changed.content.text.includes("## The numbers that matter"));
  } finally {
    article.href = originalHref;
    require.cache[modulePath] = originalModule;
  }
});

test("GET, HEAD, OPTIONS and conditional requests use consistent validators and CORS", async () => {
  const response = list.GET(request());
  const etag = response.headers.get("etag");
  assert.ok(etag);
  assert.equal(response.headers.get("access-control-allow-origin"), "*");
  assert.equal(list.GET(request("", { headers: { "If-None-Match": etag } })).status, 304);
  assert.equal(list.GET(request("", { headers: { "If-None-Match": `"other", ${etag.replace(/^W\//, "")}` } })).status, 304);
  assert.equal(list.GET(request("", { headers: { "If-None-Match": "*" } })).status, 304);
  assert.equal(list.GET(request("?type=article", { headers: { "If-None-Match": etag } })).status, 200);
  const head = list.HEAD(request("", { method: "HEAD" }));
  assert.equal(head.headers.get("etag"), etag);
  assert.equal(await head.text(), "");
  const options = list.OPTIONS();
  assert.equal(options.status, 204);
  assert.equal(options.headers.get("allow"), "GET, HEAD, OPTIONS");
  assert.ok(options.headers.get("access-control-allow-headers").includes("If-None-Match"));
});

test("JSON Feed and OpenAPI describe the same published inventory", async () => {
  const response = feed.GET(request());
  assert.equal(response.headers.get("content-type"), "application/feed+json; charset=utf-8");
  const result = await response.json();
  assert.equal(result.version, "https://jsonfeed.org/version/1.1");
  assert.deepEqual(result.items.map((item) => item.id), content.contentItems.map((item) => item.id));
  for (const item of result.items) {
    if (item._content.availability === "excerpt_only") assert.equal(item.content_text, item.summary);
  }
  const openapi = await spec.GET(request()).json();
  assert.equal(openapi.openapi, "3.0.3");
  assert.deepEqual(openapi.components.schemas.ContentSummary.properties.type.enum, ["article", "post", "news"]);
  assert.ok(openapi.paths["/api/v1/content/{slug}"].get.responses["404"]);
  assert.ok(openapi.paths["/api/v1/content"].get.responses["400"]);
});
