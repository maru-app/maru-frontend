import { FC } from 'react';
import PageTitle from '@/components/Typography/PageTitle';
import Container from '@/components/Container';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Editor from '@/components/Editor';

const Page: FC = () => {
  return (
    <Container className="mt-20">
      <PageTitle title="일기 쓰기" description="새로운 일기를 쓸 수 있어요." />
      <div className="mt-16">
        <div className="mb-4 flex justify-between">
          <Input className="w-1/2" placeholder="일기 제목을 입력해주세요." />
          <Button className="bg-emerald-500 text-white hover:bg-emerald-600">저장하기</Button>
        </div>
        <Editor />
        <div className="mt-10 flex justify-end">
          <Button className="bg-emerald-500 text-white hover:bg-emerald-600">저장하기</Button>
        </div>
      </div>
    </Container>
  );
};

export default Page;
