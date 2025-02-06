'use client';

import 'react-quill-new/dist/quill.snow.css';

import { FC } from 'react';
import dynamic from 'next/dynamic';

interface EditorProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

const QuillWrapper = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <div className="h-96 w-full border border-gray-200" />
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['link', 'image'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false
  }
};

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  return <QuillWrapper theme="snow" modules={modules} value={value} onChange={onChange} />;
};

export default Editor;
