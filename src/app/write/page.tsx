'use client';

import { ChangeEvent, FC, useEffect, useState } from 'react';
import PageTitle from '@/components/Typography/PageTitle';
import Container from '@/components/Container';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Editor from '@/components/Editor';
import toast from 'react-hot-toast';
import { createDiaryMutation } from '@/api/mutation/diary-mutation';
import { useRouter } from 'next/navigation';
import { EMOJI_LIST } from '@/constants/emoji';
import { editorPreprocessor } from '@/utils/diary-preprocessor';

const Page: FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const validateInput = () => {
    if (content.trim() === '') {
      toast('일기 내용이 비어있어요.', { icon: EMOJI_LIST.PENCIL });
      return false;
    }

    return true;
  };

  const onSaveClick = async () => {
    if (!validateInput()) {
      return;
    }

    try {
      const defaultTitle = `${new Date().getMonth() + 1}월 ${new Date().getDate()}일 일기`;
      if (title.trim() === '') {
        setTitle(defaultTitle);
        toast('일기 제목이 비어있어 오늘 날짜로 채웠어요.', { icon: EMOJI_LIST.PENCIL });
      }

      await createDiaryMutation({
        title: title.trim() === '' ? defaultTitle : title,
        content: await editorPreprocessor(content)
      });
      toast('새로운 일기를 작성했어요!', { icon: EMOJI_LIST.GREEN_BOOK });
      router.push('/diary');
    } catch {
      toast.error('일기 저장을 실패했어요. 나중에 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="일기 쓰기" description="새로운 일기를 쓸 수 있어요." />
      <div className="mt-16">
        <Input
          placeholder="일기 제목을 입력해주세요."
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          className="mb-4"
        />
        <Editor value={content} onChange={setContent} />
        <div className="mt-10 flex justify-end">
          <Button className="bg-emerald-500 text-white hover:bg-emerald-600" onClick={onSaveClick}>
            저장하기
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Page;
