'use client';

import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import PageTitle from '@/components/Typography/PageTitle';
import Container from '@/components/Container';
import { getDiaryQuery, GetDiaryQueryReturn } from '@/api/query/diary-query';
import { EMOJI_LIST } from '@/constants/emoji';
import Editor from '@/components/Editor';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { editorPreprocessor, viewerPreprocessor } from '@/utils/diary-preprocessor';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { updateDiaryMutation } from '@/api/mutation/diary-mutation';
import EmojiPicker from '@/components/EmojiPicker';
import { DiaryWriteDataForm } from '@/app/write/type';
import { DIARY_MAX_LENGTH, EMOJI_MAX_LENGTH } from '@/constants/diary-validation';

const Page: FC = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const diaryId = Number(params.id);
  const [diary, setDiary] = useState<GetDiaryQueryReturn | null>(null);
  const [diaryError, setDiaryError] = useState<string | null>(null);
  const [writeData, setWriteData] = useState<DiaryWriteDataForm>({
    emoji: '',
    title: '',
    content: ''
  });
  const [showEmoji, setShowEmoji] = useState(false);
  const pickerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetch = async () => {
      const diaryQuery = await getDiaryQuery(diaryId);
      if (diaryQuery.error) {
        setDiaryError(diaryQuery.error.code);
        return;
      }

      setDiary(diaryQuery.result ?? null);
      if (diaryQuery.result) {
        const preprocessContent = await viewerPreprocessor(diaryQuery.result.content);
        setWriteData({
          title: diaryQuery.result.title,
          emoji: diaryQuery.result.emoji,
          content: preprocessContent
        });
      }
    };

    fetch().then();
  }, [diaryId]);

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

  if (diaryError && (diaryError === 'DIARY_NOT_FOUND' || diaryError === 'DIARY_IS_NOT_OWNED')) {
    return (
      <Container className="mt-12 lg:mt-20">
        <PageTitle
          title={`${EMOJI_LIST.WARNING} 일기를 가져올 수 없어요`}
          description="올바른 접근 경로가 아닐 때 오류가 발생할 수 있어요."
        />
      </Container>
    );
  }

  if (diary === null) {
    return (
      <Container className="mt-12 lg:mt-20">
        <PageTitle title="내가 쓴 일기를 불러오는 중..." description="" />
      </Container>
    );
  }

  const diaryDate = new Date(diary.createdAt);
  const dateFormat = `${diaryDate.getFullYear()}년 ${diaryDate.getMonth() + 1}월 ${diaryDate.getDate()}일`;

  const validateInput = () => {
    if (writeData.content.trim() === '') {
      toast('일기 내용이 비어있어요.', { icon: EMOJI_LIST.PENCIL });
      return false;
    }
    if (writeData.title.trim() === '') {
      toast('일기 제목이 비어있어요.', { icon: EMOJI_LIST.PENCIL });
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

  const onEditClick = async () => {
    if (!validateInput()) {
      return;
    }

    try {
      await updateDiaryMutation(diaryId, {
        title: writeData.title,
        content: await editorPreprocessor(writeData.content),
        emoji: writeData.emoji
      });
      toast('일기를 수정했어요!', { icon: EMOJI_LIST.GREEN_BOOK });
      router.push(`/diary/${diaryId}`);
    } catch {
      toast.error('일기 수정을 실패했어요. 나중에 다시 시도해주세요.');
    }
  };

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="일기 수정" description={`${dateFormat}에 쓴 일기를 수정하고 있어요.`} />
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
          className="mb-4 ml-14 w-[calc(100%-56px)] lg:w-1/2"
          placeholder="일기 제목을 입력해주세요."
          value={writeData.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setWriteData((prev) => ({ ...prev, title: e.target.value }))}
        />
        <Editor value={writeData.content} onChange={(v) => setWriteData((prev) => ({ ...prev, content: v }))} />
        <div className="mt-10 flex items-center justify-end">
          <p className="mr-4 text-sm text-gray-500">
            {writeData.content.length}/{DIARY_MAX_LENGTH}
          </p>
          <Button className="bg-green-600 text-white hover:bg-green-700" onClick={onEditClick}>
            수정하기
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Page;
