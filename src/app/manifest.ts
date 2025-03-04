import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '마루',
    short_name: '마루',
    description: '마루: 나만의 일기를 쓰는 공간',
    start_url: '/?utm_source=pwa',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10B981'
  };
}
