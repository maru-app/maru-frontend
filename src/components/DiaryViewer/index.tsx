import { FC } from 'react';
import sanitizeHtml from 'sanitize-html';
import { viewerPreprocessor } from '@/utils/diary-preprocessor';

interface DiaryViewerProps {
  readonly content: string;
}

const DiaryViewer: FC<DiaryViewerProps> = async ({ content }) => {
  const preprocessedContent = await viewerPreprocessor(content);

  return (
    <div
      className="leading-relaxed"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(preprocessedContent, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
          allowedAttributes: {
            img: ['src', 'alt', 'style'],
            p: ['style'],
            span: ['style'],
            h1: ['style'],
            h2: ['style'],
            h3: ['style'],
            h4: ['style'],
            h5: ['style']
          }
        })
      }}
    />
  );
};

export default DiaryViewer;
