import publications from "@/app/data/publications";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = "https://www.omarbakri.com";
  const items = publications
    .map((publication) => {
      const link = publication.external ? publication.href : `${baseUrl}${publication.href}`;
      return `<item>
<title>${escapeXml(publication.title)}</title>
<link>${escapeXml(link)}</link>
<guid isPermaLink="true">${escapeXml(link)}</guid>
<pubDate>${new Date(`${publication.publishedAt}T00:00:00Z`).toUTCString()}</pubDate>
<description>${escapeXml(publication.excerpt)}</description>
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
<title>Intelligent Rails</title>
<link>${baseUrl}/newsletter</link>
<description>Analysis of payments, financial infrastructure and applied AI by Omar Al-Bakri.</description>
<language>en-gb</language>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
