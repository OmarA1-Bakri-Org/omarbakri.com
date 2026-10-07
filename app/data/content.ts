import publications from "./publications";
import { warForFloatBlocks } from "./war-for-float";

export const SITE_URL = "https://www.omarbakri.com";
export const CONTENT_TYPES = ["article", "post", "news"] as const;
export type ContentType = typeof CONTENT_TYPES[number];

export function articleMarkdown(): string {
  const article = publications.find((item) => item.href === "/newsletter/the-war-for-float")!;
  return [`# ${article.title}`, `By Omar Al-Bakri | ${article.publishedAt}`, article.excerpt,
    ...warForFloatBlocks.map((block) => {
      if (block.type === "divider") return "---";
      if (block.type === "heading") return `## ${block.text}`;
      if (block.type === "quote") return `> ${block.text}`;
      if (block.type === "list") return block.items!.map((item) => `- ${item}`).join("\n");
      return block.text;
    }),
  ].join("\n\n") + "\n";
}

// Slugs are durable identifiers, not recomputed from editable titles.
export const contentItems = publications.map((publication) => {
  const fullText = publication.href === "/newsletter/the-war-for-float";
  const canonicalUrl = publication.external ? publication.href : `${SITE_URL}${publication.href}`;
  const slug = publication.slug;
  if (!slug) throw new Error("New publication requires a durable content slug");
  return {
    id: canonicalUrl,
    slug,
    type: publication.type,
    title: publication.title,
    excerpt: publication.excerpt,
    author: { name: "Omar Al-Bakri", url: SITE_URL },
    publishedAt: `${publication.publishedAt}T00:00:00.000Z`,
    topics: publication.topics,
    canonicalUrl,
    source: { name: publication.source, url: canonicalUrl, external: publication.external },
    availability: fullText ? "full_text" as const : "excerpt_only" as const,
    rights: { license: "all-rights-reserved", attributionRequired: true,
      reusePermission: "Permission required for republication; machine-readable access does not grant a reuse license." },
    apiUrl: `${SITE_URL}/api/v1/content/${slug}`,
    markdownUrl: fullText ? `${SITE_URL}/newsletter/the-war-for-float.md` : null,
  };
}).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug));

export function getContent(slug: string) {
  const item = contentItems.find((entry) => entry.slug === slug);
  if (!item) return null;
  return { ...item, content: item.availability === "full_text"
    ? { format: "text/markdown", text: articleMarkdown() } : null };
}

export class QueryError extends Error {}

export function listContent(url: URL) {
  const params = url.searchParams;
  const allowed = new Set(["type", "topic", "search", "limit", "offset"]);
  for (const key of Array.from(params.keys())) {
    if (!allowed.has(key)) throw new QueryError(`Unknown query parameter: ${key}`);
    if (params.getAll(key).length !== 1) throw new QueryError(`Duplicate query parameter: ${key}`);
  }
  const type = params.get("type");
  if (type !== null && !CONTENT_TYPES.includes(type as ContentType)) throw new QueryError("type must be article, post or news");
  function boundedInteger(key: string, fallback: number, minimum: number, maximum: number) {
    const raw = params.get(key);
    if (raw === null) return fallback;
    if (!/^\d+$/.test(raw) || !Number.isSafeInteger(Number(raw)) || Number(raw) < minimum || Number(raw) > maximum)
      throw new QueryError(`${key} must be an integer from ${minimum} to ${maximum}`);
    return Number(raw);
  }
  const limit = boundedInteger("limit", 20, 1, 100);
  const offset = boundedInteger("offset", 0, 0, 100000);
  const topic = params.get("topic")?.trim().toLowerCase();
  const search = params.get("search")?.trim().toLowerCase();
  if (params.has("topic") && (!topic || topic.length > 100)) throw new QueryError("topic must contain 1 to 100 characters");
  if (params.has("search") && (!search || search.length > 200)) throw new QueryError("search must contain 1 to 200 characters");
  const matches = contentItems.filter((item) => (!type || item.type === type)
    && (!topic || item.topics.some((value) => value.toLowerCase() === topic))
    && (!search || `${item.title} ${item.excerpt} ${item.topics.join(" ")}`.toLowerCase().includes(search)));
  const next = offset + limit < matches.length ? new URL(url) : null;
  if (next) next.searchParams.set("offset", String(offset + limit));
  return { version: "1", items: matches.slice(offset, offset + limit),
    pagination: { total: matches.length, limit, offset, next: next?.toString() ?? null } };
}

export function jsonFeed() {
  return {
    version: "https://jsonfeed.org/version/1.1",
    title: "Intelligent Rails", home_page_url: `${SITE_URL}/newsletter`, feed_url: `${SITE_URL}/feed.json`,
    description: "Analysis of payments, financial infrastructure and applied AI by Omar Al-Bakri.",
    authors: [{ name: "Omar Al-Bakri", url: SITE_URL }], language: "en-GB",
    items: contentItems.map((item) => ({ id: item.id, url: item.canonicalUrl, title: item.title,
      summary: item.excerpt, content_text: item.availability === "full_text"
        ? articleMarkdown().replace(/\*\*/g, "").replace(/^#{1,6}\s+/gm, "").replace(/^>\s?/gm, "").replace(/^---$/gm, "") : item.excerpt,
      date_published: item.publishedAt, tags: item.topics,
      _content: { type: item.type, availability: item.availability, rights: item.rights, api_url: item.apiUrl },
    })),
  };
}
