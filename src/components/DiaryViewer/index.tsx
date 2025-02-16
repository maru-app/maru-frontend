'use client';

import { FC } from 'react';
import sanitizeHtml from 'sanitize-html';

interface DiaryViewerProps {
  readonly content: string;
}

const DiaryViewer: FC<DiaryViewerProps> = ({ content }) => {
  return (
    <div
      className="leading-relaxed"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(content, {
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
