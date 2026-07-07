import { MetadataRoute } from 'next'

const LAST_MODIFIED = new Date(process.env.BUILD_TIMESTAMP ?? '2026-07-07T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.omarbakri.com',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
