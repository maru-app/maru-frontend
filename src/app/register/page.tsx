'use client';

import { FC } from 'react';
import PageTitle from '@/components/Typography/PageTitle';
import Container from '@/components/Container';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useSearchParams, useRouter } from 'next/navigation';
import { registerMutation } from '@/api/mutation/auth-mutation';

const Page: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = async (formData: FormData) => {
    const nickname = formData.get('nickname');
    if (nickname === null || token === null) return;
    await registerMutation({
      nickname: nickname as string,
      registerToken: token
    });
    router.push('/');
  };

  return (
    <Container className="mt-20">
      <PageTitle title="이어서 회원가입하기" description="회원가입을 마무리하기 위해 추가정보를 입력해주세요." />
      <form action={onSubmit}>
        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">닉네임</p>
          <Input className="w-1/2" name="nickname" placeholder="마루에서 사용할 닉네임을 정해주세요." />
        </div>
        <div className="mt-10 flex justify-end">
          <Button type="submit" className="bg-emerald-500 px-5 text-white hover:bg-emerald-600">
            회원가입
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Page;
