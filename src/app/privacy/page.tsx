import { FC } from 'react';
import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { NotionAPI } from 'notion-client';
import NotionPageRenderer from '@/components/NotionPageRenderer';

const notion = new NotionAPI();

const Page: FC = async () => {
  const recordMap = await notion.getPage('1aadf96a7659808ca78ae5a474398d64');

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="개인정보처리방침" description="" />
      <NotionPageRenderer recordMap={recordMap} />
    </Container>
  );
};

export default Page;
