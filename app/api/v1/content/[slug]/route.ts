import { getContent } from "../../../../data/content";
import { contentResponse } from "../../../../lib/content-response";

export const dynamic = "force-dynamic";
export { OPTIONS } from "../../../../lib/content-response";
export function GET(request: Request, { params }: { params: { slug: string } }) {
  const item = getContent(params.slug);
  return item ? contentResponse(request, item)
    : contentResponse(request, { error: { code: "not_found", message: "Content not found" } }, { status: 404 });
}
export const HEAD = GET;
