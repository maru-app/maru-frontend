import { FC } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';

const Navbar: FC = () => {
  return (
    <header className="fixed w-full border-b bg-white/50 py-3 backdrop-blur">
      <Container className="flex items-center justify-between">
        <h1 className="font-hahmlet text-[26px] font-bold">마루</h1>
        <div className="flex space-x-8">
          <Button variance="text" active>
            소개
          </Button>
          <Button variance="text">랭킹</Button>
          <Button variance="text">개인정보</Button>
        </div>
        <Button className="bg-emerald-500 text-sm font-bold text-white hover:bg-emerald-600">로그인</Button>
      </Container>
    </header>
  );
};

export default Navbar;
