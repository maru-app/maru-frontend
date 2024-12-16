import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <Container className="mt-20">
      <PageTitle title="내 일기" description="새로운 일기를 쓰거나 지금까지 쓴 일기를 확인해보세요." />
    </Container>
  );
};

export default Page;
