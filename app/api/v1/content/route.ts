import { listContent, QueryError } from "../../../data/content";
import { contentResponse } from "../../../lib/content-response";

export const dynamic = "force-dynamic";
export { OPTIONS } from "../../../lib/content-response";
export function GET(request: Request) {
  try { return contentResponse(request, listContent(new URL(request.url))); }
  catch (error) {
    if (error instanceof QueryError) return contentResponse(request, { error: { code: "invalid_query", message: error.message } }, { status: 400 });
    throw error;
  }
}
export const HEAD = GET;
