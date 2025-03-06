import './globals.css';
import 'react-tooltip/dist/react-tooltip.css';

import type { Metadata, Viewport } from 'next';
import { FC, PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getMyInfoQuery } from '@/api/query/auth-query';
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google';
import Adsense from '@/components/Adsense';

export const metadata: Metadata = {
  title: {
    template: '%s | 마루 - 나만의 일기를 쓰는 공간',
    default: '마루 - 나만의 일기를 쓰는 공간'
  },
  description: '마루는 나만의 일기를 쓸 수 있는 서비스입니다.',
  metadataBase: new URL('https://maruu.space'),
  openGraph: {
    url: 'https://maruu.space',
    title: '마루 - 나만의 일기를 쓰는 공간',
    description: '마루는 나만의 일기를 쓸 수 있는 서비스입니다.',
    siteName: '마루',
    images: [
      {
        url: 'https://maruu.space/og-image.png',
        width: 1200,
        height: 630,
        alt: '마루 썸네일'
      }
    ],
    locale: 'ko_KR',
    type: 'website'
  },
  icons: {
    icon: new URL('/favicon.ico', 'https://maruu.space')
  },
  other: {
    'google-adsense-account': 'ca-pub-2490453096003621'
  }
};

export const viewport: Viewport = {
  themeColor: '#10B981'
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const myInfo = await getMyInfoQuery();
  const isLogin = myInfo.result?.email !== undefined;

  return (
    <html lang="ko">
      <body className="antialiased">
        <Navbar authorize={isLogin} />
        <section className="pt-[65px]">{children}</section>
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
      <Adsense />
      <GoogleAnalytics gaId="G-H5T4L44K0V" />
    </html>
  );
};

export default RootLayout;
