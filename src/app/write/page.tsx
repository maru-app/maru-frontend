'use client';

import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
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
import { DiaryWriteDataForm } from '@/app/write/type';
import EmojiPicker from '@/components/EmojiPicker';
import { DIARY_MAX_LENGTH, EMOJI_MAX_LENGTH } from '@/constants/diary-validation';

const Page: FC = () => {
  const router = useRouter();
  const [writeData, setWriteData] = useState<DiaryWriteDataForm>({
    emoji: '😊',
    title: '',
    content: ''
  });
  const [showEmoji, setShowEmoji] = useState(false);
  const pickerContainerRef = useRef<HTMLDivElement>(null);

  const validateInput = () => {
    if (writeData.content.trim() === '') {
      toast('일기 내용이 비어있어요.', { icon: EMOJI_LIST.PENCIL });
      return false;
    }
    if (writeData.content.length > DIARY_MAX_LENGTH) {
      toast(`일기 내용을 ${DIARY_MAX_LENGTH}자 이하로 줄여주세요.`, { icon: EMOJI_LIST.PENCIL });
      return false;
    }
    if (writeData.emoji.length > EMOJI_MAX_LENGTH) {
      toast('이모지 외 다른 글자가 들어있어요.', { icon: EMOJI_LIST.PENCIL });
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
      if (writeData.title.trim() === '') {
        setWriteData((prev) => ({ ...prev, title: defaultTitle }));
      }

      await createDiaryMutation({
        title: writeData.title.trim() === '' ? defaultTitle : writeData.title,
        content: await editorPreprocessor(writeData.content),
        emoji: writeData.emoji
      });
      toast('새로운 일기를 작성했어요!', { icon: EMOJI_LIST.GREEN_BOOK });
      router.push('/diary');
    } catch {
      toast.error('일기 저장을 실패했어요. 나중에 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    const handleUnloadPage = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    const handleCloseEmojiPicker = (e: MouseEvent) => {
      if (pickerContainerRef.current && !pickerContainerRef.current.contains(e.target as Node)) {
        setShowEmoji(false);
      }
    };

    window.addEventListener('beforeunload', handleUnloadPage);
    document.addEventListener('mousedown', handleCloseEmojiPicker);

    return () => {
      window.removeEventListener('beforeunload', handleUnloadPage);
      document.removeEventListener('mousedown', handleCloseEmojiPicker);
    };
  }, []);

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="일기 쓰기" description="새로운 일기를 쓸 수 있어요." />
      <div className="mt-16">
        <div className="relative" ref={pickerContainerRef}>
          <Input
            className="absolute !w-11 text-center"
            onClick={() => setShowEmoji(true)}
            value={writeData.emoji}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setWriteData((prev) => ({ ...prev, emoji: e.target.value }))
            }
          />
          <EmojiPicker
            isOpen={showEmoji}
            onEmoji={(emoji) => setWriteData((prev) => ({ ...prev, emoji }))}
            onClose={() => setShowEmoji(false)}
          />
        </div>
        <Input
          placeholder="제목을 빈 칸으로 두면 오늘 날짜로 채워드릴게요."
          value={writeData.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setWriteData((prev) => ({ ...prev, title: e.target.value }))}
          className="mb-4 ml-14 w-[calc(100%-56px)] lg:w-1/2"
        />

        <Editor value={writeData.content} onChange={(v) => setWriteData((prev) => ({ ...prev, content: v }))} />

        <div className="mt-10 flex items-center justify-end">
          <p className="mr-4 text-sm text-gray-500">
            {writeData.content.length}/{DIARY_MAX_LENGTH}
          </p>
          <Button className="bg-green-600 text-white hover:bg-green-700" onClick={onSaveClick}>
            저장하기
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Page;
