import { FC } from 'react';
import PageTitle from '@/components/Typography/PageTitle';
import Container from '@/components/Container';
import { getDiary } from '@/api/query/diary-query';
import DiaryViewer from '@/components/DiaryViewer';
import PageBackwardButton from '@/components/PageBackwardButton';

const Page: FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  const diaryId = (await params).id;
  const diary = (await getDiary(Number(diaryId))).result;

  if (diary === undefined) {
    return (
      <Container className="mt-20">
        <PageTitle title="내가 쓴 일기를 불러오는 중..." description="" />
      </Container>
    );
  }

  const diaryDate = new Date(diary.createdAt);

  return (
    <Container className="mt-20">
      <div className="flex justify-between">
        <PageTitle
          title={diary.title}
          description={`${diaryDate.getFullYear()}년 ${diaryDate.getMonth() + 1}월 ${diaryDate.getDate()}일`}
        />
        <div>
          <PageBackwardButton />
        </div>
      </div>
      <div className="mt-10">
        <DiaryViewer content={diary.content} />
      </div>
    </Container>
  );
};

export default Page;
