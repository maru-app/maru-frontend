'use client';

import { FC } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <header className="fixed w-full border-b bg-white/50 py-3 backdrop-blur">
      <Container className="flex items-center justify-between">
        <Link className="select-none font-hahmlet text-[26px] font-bold" href="/">
          마루
        </Link>
        <div className="flex space-x-8">
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
        <Button className="bg-emerald-500 text-sm font-bold text-white hover:bg-emerald-600">로그인</Button>
      </Container>
    </header>
  );
};

export default Navbar;
