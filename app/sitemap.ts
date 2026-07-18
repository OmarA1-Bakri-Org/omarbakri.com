import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.omarbakri.com",
      lastModified: new Date("2026-07-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.omarbakri.com/newsletter",
      lastModified: new Date("2026-07-18"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.omarbakri.com/newsletter/the-war-for-float",
      lastModified: new Date("2026-04-24"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
