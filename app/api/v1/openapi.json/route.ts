import { contentOpenApi } from "../../../data/content-openapi";
import { contentResponse } from "../../../lib/content-response";

export const dynamic = "force-dynamic";
export { OPTIONS } from "../../../lib/content-response";
export function GET(request: Request) { return contentResponse(request, contentOpenApi); }
export const HEAD = GET;
