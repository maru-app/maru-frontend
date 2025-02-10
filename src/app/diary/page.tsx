import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { FC } from 'react';
import MyDiaryCard from '@/components/MyDiaryCard';
import Strike from '@/components/Strike';
import Button from '@/components/Button';
import { PencilIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { getAllDiary } from '@/api/query/diary-query';

const Page: FC = async () => {
  const diaryList = (await getAllDiary()).result ?? [];

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="내 일기" description="새로운 일기를 쓰거나 지금까지 쓴 일기를 확인해보세요." />
      <Button
        className="mt-3 inline-block items-center bg-emerald-500 text-white hover:bg-emerald-600"
        as={Link}
        href="/write"
      >
        <span className="flex items-center">
          새 일기 쓰기
          <PencilIcon className="ml-2 size-4" />
        </span>
      </Button>
      <div className="mt-16">
        <h2 className="text-2xl font-bold">연속 기록</h2>
        <Strike />
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold">작성한 일기</h2>
        <div className="mt-2 block grid-cols-3 gap-x-5 gap-y-4 space-y-3 lg:grid lg:space-y-0">
          {diaryList.length === 0 && <p className="text-lg">작성된 일기가 없어요. 오늘 일어난 일을 기록해보세요.</p>}
          {diaryList.length > 0 &&
            diaryList.map((diary) => (
              <MyDiaryCard
                id={diary.diaryId}
                title={diary.title}
                date={new Date(diary.createdAt)}
                key={diary.diaryId}
              />
            ))}
        </div>
        {diaryList.length > 0 && <Button className="mt-8 w-full py-5">더보기</Button>}
      </div>
    </Container>
  );
};

export default Page;
