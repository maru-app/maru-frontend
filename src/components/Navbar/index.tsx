'use client';

import { FC } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  readonly authorize?: boolean;
}

const Navbar: FC<NavbarProps> = ({ authorize }) => {
  const pathname = usePathname();

  return (
    <header className="fixed w-full border-b bg-white/50 py-3 backdrop-blur">
      <Container className="flex items-center justify-between">
        <div className="flex">
          <Link className="mr-16 select-none font-hahmlet text-[26px] font-bold" href="/">
            마루
          </Link>
          <div className="flex space-x-6">
            <div className="flex space-x-4">
              <Button variance="text" active={pathname === '/'}>
                소개
              </Button>
              <Button variance="text" active={pathname === '/rank'}>
                랭킹
              </Button>
              <Button variance="text" active={pathname === '/privacy'}>
                개인정보
              </Button>
            </div>
            {authorize && (
              <>
                <div className="my-1 border-r" />
                <div className="flex space-x-4">
                  <Button variance="text">내 일기</Button>
                  <Button variance="text">프로필</Button>
                </div>
              </>
            )}
          </div>
        </div>
        <Button className="bg-emerald-500 text-sm font-bold text-white hover:bg-emerald-600" as={Link} href="/login">
          {authorize ? '일기쓰기' : '로그인'}
        </Button>
      </Container>
    </header>
  );
};

export default Navbar;
