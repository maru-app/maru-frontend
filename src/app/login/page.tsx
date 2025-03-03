import { FC } from 'react';
import Button from '@/components/Button';
import { API_HOST } from '@/api';
import NaverIcon from '@/assets/icons/naver.svg';
import GoogleIcon from '@/assets/icons/google.svg';
import Link from 'next/link';

const Page: FC = () => {
  return (
    <div className="mt-48 flex flex-col items-center">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">로그인</h1>
        <p>소셜로그인으로 마루를 바로 이용해보세요.</p>
      </div>

      <div className="flex flex-col space-y-2">
        <Button
          className="flex min-w-72 items-center border border-gray-300 bg-white text-black hover:bg-gray-200"
          as="a"
          href={`${API_HOST}/oauth/login/naver`}
        >
          <NaverIcon className="h-9 w-9" />
          <div className="w-full text-center">네이버 계정으로 로그인하기</div>
        </Button>
        <Button
          className="flex min-w-72 items-center border border-gray-300 bg-white text-black hover:bg-gray-200"
          as="a"
          href={`${API_HOST}/oauth/login/google`}
        >
          <GoogleIcon className="h-9 w-9" />
          <div className="w-full text-center">Google 계정으로 로그인하기</div>
        </Button>
        {/* <Button */}
        {/*  className="flex min-w-60 items-center border border-gray-300 bg-white text-black hover:bg-gray-100" */}
        {/*  as="a" */}
        {/*  href={`${API_HOST}/oauth/login/apple`} */}
        {/* > */}
        {/*  <AppleIcon className="h-8 w-8" /> */}
        {/*  <div className="w-full text-center">Apple 로그인</div> */}
        {/* </Button> */}
      </div>

      <p className="mt-10 text-gray-400">
        회원가입 및 로그인 시{' '}
        <Link href="/privacy" className="underline">
          <b>개인정보처리방침</b>
        </Link>{' '}
        및{' '}
        <Link href="/tos" className="underline">
          <b>이용약관</b>
        </Link>{' '}
        에 동의하는 것으로 간주합니다.
      </p>
    </div>
  );
};

export default Page;
