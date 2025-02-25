'use client';

import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import PageTitle from '@/components/Typography/PageTitle';
import Container from '@/components/Container';
import { getDiary, GetDiaryQueryReturn } from '@/api/query/diary-query';
import { EMOJI_LIST } from '@/constants/emoji';
import Editor from '@/components/Editor';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { viewerPreprocessor } from '@/utils/diary-preprocessor';
import { useParams } from 'next/navigation';

const Page: FC = () => {
  const params = useParams<{ id: string }>();
  const diaryId = Number(params.id);
  const [diary, setDiary] = useState<GetDiaryQueryReturn | null>(null);
  const [diaryError, setDiaryError] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    getDiary(diaryId).then((data) => {
      if (data.error) {
        setDiaryError(data.error.code);
        return;
      }

      setDiary(data.result ?? null);
      if (data.result) {
        viewerPreprocessor(data.result.content).then((content) => {
          setContent(content);
        });
        setTitle(data.result.title);
      }
    });
  }, [diaryId]);

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
  const dateFormat = useMemo(
    () => `${diaryDate.getFullYear()}년 ${diaryDate.getMonth() + 1}월 ${diaryDate.getDate()}일`,
    [diaryDate]
  );

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="일기 수정" description={`${dateFormat}에 쓴 일기를 수정하고 있어요.`} />
      <div className="mt-16">
        <div className="mb-4 flex justify-between">
          <Input
            placeholder="일기 제목을 입력해주세요."
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />
          <Button className="hidden bg-emerald-500 text-white hover:bg-emerald-600 lg:block">수정하기</Button>
        </div>
        <Editor value={content} onChange={setContent} />
        <div className="mt-10 flex justify-end">
          <Button className="bg-emerald-500 text-white hover:bg-emerald-600">수정하기</Button>
        </div>
      </div>
    </Container>
  );
};

export default Page;
