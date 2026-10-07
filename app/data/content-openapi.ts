import { SITE_URL, CONTENT_TYPES } from "./content";

const string = { type: "string" };
const uri = { type: "string", format: "uri" };
const item = {
  type: "object",
  required: ["id", "slug", "type", "title", "excerpt", "author", "publishedAt", "topics", "canonicalUrl", "source", "availability", "rights", "apiUrl", "markdownUrl"],
  properties: {
    id: uri, slug: string, type: { type: "string", enum: CONTENT_TYPES }, title: string, excerpt: string,
    author: { type: "object", required: ["name", "url"], properties: { name: string, url: uri } },
    publishedAt: { type: "string", format: "date-time", description: "Date-only sources normalised to midnight UTC; not a verified time of day." },
    topics: { type: "array", items: string }, canonicalUrl: uri,
    source: { type: "object", required: ["name", "url", "external"], properties: { name: string, url: uri, external: { type: "boolean" } } },
    availability: { type: "string", enum: ["full_text", "excerpt_only"] },
    rights: { type: "object", required: ["license", "attributionRequired", "reusePermission"], properties: {
      license: { type: "string", enum: ["all-rights-reserved"] }, attributionRequired: { type: "boolean" }, reusePermission: string,
    } },
    apiUrl: uri, markdownUrl: { ...uri, nullable: true },
  },
};
const jsonResponse = (schema: unknown, description = "Success") => ({ description, content: { "application/json": { schema } } });
const error = { type: "object", required: ["error"], properties: { error: { type: "object", required: ["code", "message"], properties: { code: string, message: string } } } };
const notModified = { description: "Unchanged representation; ETag matches If-None-Match." };
const validator = { name: "If-None-Match", in: "header", required: false, schema: string };

export const contentOpenApi = {
  openapi: "3.0.3",
  info: { title: "Omar Al-Bakri Public Content API", version: "1.0.0", description: "Read-only published content. No authentication. Attribution required; access does not grant republication permission. External posts contain excerpts only." },
  servers: [{ url: SITE_URL }],
  paths: {
    "/api/v1/content": { get: {
      operationId: "listContent", summary: "List published articles, posts and news, newest first",
      parameters: [validator,
        { name: "type", in: "query", schema: { type: "string", enum: CONTENT_TYPES } },
        { name: "topic", in: "query", description: "Case-insensitive exact topic match", schema: { type: "string", minLength: 1, maxLength: 100 } },
        { name: "search", in: "query", description: "Case-insensitive substring of title, excerpt and topics", schema: { type: "string", minLength: 1, maxLength: 200 } },
        { name: "limit", in: "query", schema: { type: "integer", minimum: 1, maximum: 100, default: 20 } },
        { name: "offset", in: "query", schema: { type: "integer", minimum: 0, maximum: 100000, default: 0 } },
      ],
      responses: {
        "200": jsonResponse({ type: "object", required: ["version", "items", "pagination"], properties: {
          version: { type: "string", enum: ["1"] }, items: { type: "array", items: { $ref: "#/components/schemas/ContentSummary" } },
          pagination: { type: "object", required: ["total", "limit", "offset", "next"], properties: {
            total: { type: "integer" }, limit: { type: "integer" }, offset: { type: "integer" }, next: { ...uri, nullable: true },
          } },
        } }), "400": jsonResponse(error, "Invalid, repeated or unknown query parameter"), "304": notModified,
      },
    } },
    "/api/v1/content/{slug}": { get: {
      operationId: "getContent", summary: "Get publication metadata and available full Markdown",
      parameters: [validator, { name: "slug", in: "path", required: true, schema: string }],
      responses: { "200": jsonResponse({ allOf: [{ $ref: "#/components/schemas/ContentSummary" }, {
        type: "object", required: ["content"], properties: { content: { type: "object", nullable: true, required: ["format", "text"], properties: { format: { type: "string", enum: ["text/markdown"] }, text: string } } },
      }] }), "404": jsonResponse(error, "Unknown publication"), "304": notModified },
    } },
    "/feed.json": { get: { operationId: "getJsonFeed", summary: "JSON Feed 1.1; _content contains rights and availability",
      parameters: [validator], responses: { "200": { description: "JSON Feed 1.1", content: { "application/feed+json": { schema: { type: "object" } } } }, "304": notModified } } },
    "/newsletter/the-war-for-float.md": { get: { operationId: "getArticleMarkdown", summary: "Full published article as Markdown", parameters: [validator],
      responses: { "200": { description: "Published article", content: { "text/markdown": { schema: string } } }, "304": notModified } } },
  },
  components: { schemas: { ContentSummary: item } },
};
