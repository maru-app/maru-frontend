import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://maruu.space',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://maruu.space/diary',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: 'https://maruu.space/rank',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: 'https://maruu.space/profile',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: 'https://maruu.space/login',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2
    },
    {
      url: 'https://maruu.space/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2
    },
    {
      url: 'https://maruu.space/tos',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2
    }
  ];
}
