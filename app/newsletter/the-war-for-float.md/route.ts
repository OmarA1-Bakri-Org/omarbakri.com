import { articleMarkdown } from "../../data/content";
import { contentResponse } from "../../lib/content-response";

export const dynamic = "force-dynamic";
export { OPTIONS } from "../../lib/content-response";
export function GET(request: Request) { return contentResponse(request, articleMarkdown(), { contentType: "text/markdown; charset=utf-8" }); }
export const HEAD = GET;
