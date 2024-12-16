import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <Container className="mt-20">
      <PageTitle title="개인정보" description="마루는 암호화를 적용해 소중한 일기를 보관합니다." />
    </Container>
  );
};

export default Page;
