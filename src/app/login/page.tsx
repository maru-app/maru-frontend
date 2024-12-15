import { FC } from 'react';
import Button from '@/components/Button';

const Page: FC = () => {
  return (
    <div className="mt-48 flex flex-col items-center">
      <h1 className="mb-6 text-3xl font-bold">로그인</h1>

      <div className="flex flex-col space-y-2">
        {/* TODO: 실제 소셜로그인 디자인 가이드 라인을 사용할 것. */}
        <Button className="min-w-60 bg-green-500 text-white">네이버 로그인</Button>
        <Button className="min-w-60 bg-blue-500 text-white">Google 로그인</Button>
        <Button className="min-w-60 bg-neutral-900 text-white">Apple 로그인</Button>
      </div>
    </div>
  );
};

export default Page;
