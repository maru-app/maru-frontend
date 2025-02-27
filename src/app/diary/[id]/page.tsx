import { FC } from 'react';
import PageTitle from '@/components/Typography/PageTitle';
import Container from '@/components/Container';
import { getDiary } from '@/api/query/diary-query';
import DiaryViewer from '@/components/DiaryViewer';
import PageBackwardButton from '@/components/PageBackwardButton';
import { EMOJI_LIST } from '@/constants/emoji';
import DeleteDiaryButton from '@/components/DeleteDiaryButton';
import EditDiaryButton from '@/components/EditDiaryButton';

const Page: FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  const diaryId = (await params).id;
  const diary = await getDiary(Number(diaryId));

  if (diary.error && (diary.error.code === 'DIARY_NOT_FOUND' || diary.error.code === 'DIARY_IS_NOT_OWNED')) {
    return (
      <Container className="mt-12 lg:mt-20">
        <PageTitle
          title={`${EMOJI_LIST.WARNING} 일기를 가져올 수 없어요`}
          description="올바른 접근 경로가 아닐 때 오류가 발생할 수 있어요."
        />
      </Container>
    );
  }

  if (diary.result === undefined) {
    return (
      <Container className="mt-12 lg:mt-20">
        <PageTitle title="내가 쓴 일기를 불러오는 중..." description="" />
      </Container>
    );
  }

  const diaryDate = new Date(diary.result.createdAt);

  return (
    <Container className="mt-12 lg:mt-20">
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <PageTitle
          title={diary.result.title}
          description={`${diaryDate.getFullYear()}년 ${diaryDate.getMonth() + 1}월 ${diaryDate.getDate()}일`}
        />
        <div className="flex flex-shrink-0 space-x-2">
          <PageBackwardButton />
          <EditDiaryButton diaryId={diary.result.diaryId} />
          <DeleteDiaryButton diaryId={diary.result.diaryId} />
        </div>
      </div>
      <div className="mt-10">
        <DiaryViewer content={diary.result.content} />
      </div>
    </Container>
  );
};

export default Page;
