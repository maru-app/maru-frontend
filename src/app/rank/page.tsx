import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="랭킹" description="높은 연속 기록을 유지 중인 사용자들을 만나보세요." />
      <p className="mt-1 text-sm text-gray-400">* 연속 기록을 공개로 설정한 사용자들만 표시됩니다.</p>
    </Container>
  );
};

export default Page;
