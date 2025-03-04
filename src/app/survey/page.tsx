import { FC } from 'react';
import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { NotionAPI } from 'notion-client';
import NotionPageRenderer from '@/components/NotionPageRenderer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '설문'
};

const notion = new NotionAPI();

const Page: FC = async () => {
  const recordMap = await notion.getPage('1acdf96a765980f3abe6e86c6b776d83');

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="피드백" description="" />
      <NotionPageRenderer recordMap={recordMap} />
    </Container>
  );
};

export default Page;
