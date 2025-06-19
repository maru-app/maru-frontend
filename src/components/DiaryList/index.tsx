'use client';

import { FC, useEffect, useState } from 'react';
import MyDiaryCard from '@/components/MyDiaryCard';
import Button from '@/components/Button';
import { getAllDiaryQuery, GetAllDiaryQueryReturn } from '@/api/query/diary-query';

export const DiaryList: FC = () => {
  const [diaryData, setDiaryData] = useState<GetAllDiaryQueryReturn | null>(null);
  const [size, setSize] = useState<number>(15);

  useEffect(() => {
    getAllDiaryQuery(size).then((data) => setDiaryData(data.result ?? null));
  }, [size]);

  const handlePagination = () => {
    if (diaryData === null) return;

    if (diaryData.page.number + 1 >= diaryData.page.totalPages) return;

    setSize(size + 15);
  };

  if (diaryData === null) {
    return <></>;
  }

  return (
    <>
      <div className="mt-2 block grid-cols-3 gap-x-5 gap-y-5 space-y-3 lg:grid lg:space-y-0">
        {diaryData.content.length === 0 && (
          <p className="text-lg">작성된 일기가 없어요. 오늘 일어난 일을 기록해보세요.</p>
        )}
        {diaryData.content.length > 0 &&
          diaryData.content.map((diary) => (
            <MyDiaryCard
              id={diary.diaryId}
              title={`${diary.emoji} ${diary.title}`}
              date={new Date(diary.createdAt)}
              key={diary.diaryId}
            />
          ))}
      </div>
      {diaryData.page.number + 1 < diaryData.page.totalPages && (
        <Button className="mt-8 w-full py-5" onClick={handlePagination}>
          더보기
        </Button>
      )}
    </>
  );
};

export default DiaryList;
