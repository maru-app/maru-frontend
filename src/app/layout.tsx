import './globals.css';

import type { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '마루 | 나만의 일기를 쓰는 공간',
  description: '마루는 나만의 일기를 쓸 수 있는 서비스입니다.'
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Navbar />
        <section className="pt-[65px]">{children}</section>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
