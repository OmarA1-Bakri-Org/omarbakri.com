import { createHash } from "node:crypto";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "If-None-Match",
  "Access-Control-Expose-Headers": "ETag, Cache-Control",
};

export function OPTIONS() {
  return new Response(null, { status: 204, headers: { ...cors, Allow: "GET, HEAD, OPTIONS", "Access-Control-Max-Age": "86400" } });
}

export function contentResponse(request: Request, value: unknown, options: { status?: number; contentType?: string } = {}) {
  const body = typeof value === "string" ? value : JSON.stringify(value);
  const status = options.status ?? 200;
  const etag = `W/"${createHash("sha256").update(body).digest("hex")}"`;
  const headers = {
    ...cors, "Content-Type": options.contentType ?? "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": status === 200 ? "public, max-age=300, s-maxage=300" : "no-store",
    ...(status === 200 ? { ETag: etag } : {}),
  };
  const validators = request.headers.get("if-none-match")?.split(",").map((value) => value.trim().replace(/^W\//, ""));
  if (status === 200 && validators?.some((value) => value === "*" || value === etag.replace(/^W\//, "")))
    return new Response(null, { status: 304, headers });
  return new Response(request.method === "HEAD" ? null : body, { status, headers });
}
