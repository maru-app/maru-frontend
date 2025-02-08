'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

interface MyDiaryCardProps {
  readonly id: number;
  readonly title: string;
  readonly date: Date;
}

const MyDiaryCard: FC<MyDiaryCardProps> = ({ id, title, date }) => {
  const router = useRouter();

  return (
    <div
      className="group mt-2 cursor-pointer rounded-md border border-gray-200 p-4 transition-all duration-200 ease-in-out hover:bg-gray-200"
      onClick={() => router.push(`/diary/${id}`)}
    >
      <p className="line-clamp-2 break-keep text-lg font-bold group-hover:underline">{title}</p>
      <p className="mt-1.5 text-lg">
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 일기
      </p>
      <p />
    </div>
  );
};

export default MyDiaryCard;
