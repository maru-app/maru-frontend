'use client';

import 'react-quill-new/dist/quill.snow.css';

import { FC } from 'react';
import dynamic from 'next/dynamic';

const QuillWrapper = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <div className="h-96 w-full border border-gray-200" />
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],
    ['link', 'image'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false
  }
};

const Editor: FC = () => {
  return <QuillWrapper theme="snow" modules={modules} />;
};

export default Editor;
