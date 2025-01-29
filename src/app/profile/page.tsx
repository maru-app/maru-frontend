import { FC, FormEvent } from 'react';
import PageTitle from '@/components/Typography/PageTitle';
import Container from '@/components/Container';
import { getMyInfoQuery } from '@/api/query/auth-query';
import Button from '@/components/Button';
import Input from '@/components/Input';

const Page: FC = async () => {
  const myInfo = await getMyInfoQuery();

  const onSubmit = async (formData: FormData) => {
    'use server';

    const nickname = formData.get('nickname');
    const streak = formData.get('streak');
  };

  return (
    <Container className="mt-20">
      <PageTitle title="프로필" description="내 정보를 관리해보세요." />
      <form action={onSubmit}>
        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">소셜로그인 연동</p>
          <Input className="cursor-no-dropoutline-none w-1/2" defaultValue={myInfo.result?.vendor ?? ''} readOnly />
        </div>
        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">닉네임</p>
          <Input className="w-1/2" name="nickname" defaultValue={myInfo.result?.nickname ?? ''} />
        </div>
        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">연속 기록 공개여부</p>
          <div className="flex space-x-4">
            <span className="space-x-2">
              <input type="radio" name="streak" id="public" value="public" defaultChecked />
              <label htmlFor="public">공개</label>
            </span>
            <span className="space-x-2">
              <input type="radio" name="streak" id="private" value="private" />
              <label htmlFor="private">비공개</label>
            </span>
          </div>
        </div>
        <div className="mt-10 flex justify-end">
          <Button type="submit" className="bg-emerald-500 px-5 text-white hover:bg-emerald-600">
            저장
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Page;
