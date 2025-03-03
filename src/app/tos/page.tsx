import { FC } from 'react';
import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { NotionAPI } from 'notion-client';
import NotionPageRenderer from '@/components/NotionPageRenderer';

const notion = new NotionAPI();

const Page: FC = async () => {
  const recordMap = await notion.getPage('1abdf96a76598005b79bd02835fefa5c');

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="이용약관" description="" />
      <NotionPageRenderer recordMap={recordMap} />
    </Container>
  );
};

export default Page;
