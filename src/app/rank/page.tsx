import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: '랭킹'
};

const Page: FC = () => {
  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="랭킹" description="높은 연속 기록을 유지 중인 사용자들을 만나보세요." />
      <p className="mt-1 text-sm text-gray-400">* 연속 기록을 공개로 설정한 사용자만 닉네임이 표시돼요.</p>
      <p className="mt-10 text-2xl font-bold">랭킹 페이지는 현재 준비중이에요.</p>
    </Container>
  );
};

export default Page;
