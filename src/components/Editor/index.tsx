'use client';

import 'react-quill-new/dist/quill.snow.css';

import { FC, RefObject, useCallback, useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import ReactQuill from 'react-quill-new';
import { generateGetPresignedUrlMutation, generatePutPresignedUrlMutation } from '@/api/mutation/file-mutation';
import toast from 'react-hot-toast';
import ReactQuillProps = ReactQuill.ReactQuillProps;

interface EditorProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

const QuillWrapper = dynamic(
  async () => {
    const { default: Component } = await import('react-quill-new');
    return ({ forwardedRef, ...props }: { forwardedRef: RefObject<ReactQuill | null> } & ReactQuillProps) => (
      <Component ref={forwardedRef} {...props} />
    );
  },
  {
    ssr: false,
    loading: () => <div className="h-96 w-full border border-gray-200" />
  }
);

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<ReactQuill | null>(null);
  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.addEventListener('change', async () => {
      try {
        const file = input.files?.[0];
        if (file === undefined) throw new Error('Not exists file.');
        if (editorRef.current === null) throw new Error("Editor doesn't exist.");
        const editor = editorRef.current.getEditor();
        const range = editor.getSelection();
        if (range === null) throw new Error("Range doesn't exist.");

        const presignedUrl = await generatePutPresignedUrlMutation(file.name);
        if (presignedUrl.result === undefined) throw new Error('Presigned URL Error.');
        const { url, fileName } = presignedUrl.result;

        const uploadImageToBucket = await fetch(url, {
          method: 'PUT',
          body: file
        });

        if (uploadImageToBucket.ok) {
          const getPresignedUrl = await generateGetPresignedUrlMutation(fileName);
          if (getPresignedUrl.result === undefined) throw new Error('Presigned URL Error.');

          editor.insertEmbed(range.index, 'image', getPresignedUrl.result.url);
        } else {
          throw new Error('Image upload failed.');
        }
      } catch (error) {
        toast.error('사진 업로드를 실패했어요. 잠시후 다시 시도해주세요.');
      }
    });
  }, []);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }, { header: '3' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ['link', 'image'],
          ['clean']
        ],
        handlers: {
          image: imageHandler
        }
      },
      clipboard: {
        matchVisual: false
      }
    }),
    [imageHandler]
  );

  return <QuillWrapper forwardedRef={editorRef} theme="snow" modules={modules} value={value} onChange={onChange} />;
};

export default Editor;
