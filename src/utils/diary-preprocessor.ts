'use server';

import { generateGetPresignedUrlMutation } from '@/api/mutation/file-mutation';

export async function editorPreprocessor(rawContent: string) {
  const bucketHost = process.env.NEXT_PUBLIC_STATIC_BUCKET_HOST ?? '';
  const escapedBucketHost = bucketHost.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&');
  const regex = new RegExp(`<img[^>]*src=["']${escapedBucketHost}([^"?]+)[^"']*["'][^>]*>`, 'g');
  return rawContent.replace(regex, '[image|$1]');
}

export async function viewerPreprocessor(rawContent: string) {
  const imageRegex = /\[image\|([^\]]+)]/g;
  let match;
  while ((match = imageRegex.exec(rawContent)) !== null) {
    const [original, fileName] = match;
    const { result: presignedUrl } = await generateGetPresignedUrlMutation(fileName);
    if (presignedUrl !== undefined) {
      rawContent = rawContent.replace(original, `<img src="${presignedUrl.url}" alt="image" />`);
    }
  }
  return rawContent;
}
