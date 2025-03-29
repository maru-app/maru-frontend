import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { FC } from 'react';
import Streak from '../../components/Streak';
import Button from '@/components/Button';
import { PencilIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import DiaryList from '@/components/DiaryList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '내 일기'
};

const Page: FC = async () => {
  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="내 일기" description="새로운 일기를 쓰거나 작성한 일기를 확인해보세요." />
      <Button
        className="mt-3 inline-block items-center bg-green-600 text-white hover:bg-green-700"
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
        <Streak />
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold">작성한 일기</h2>
        <DiaryList />
      </div>
    </Container>
  );
};

export default Page;
