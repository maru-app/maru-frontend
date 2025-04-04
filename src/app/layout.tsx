import './globals.css';
import 'react-tooltip/dist/react-tooltip.css';

import type { Metadata, Viewport } from 'next';
import { FC, PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google';
import Adsense from '@/components/Adsense';
import NextTopLoader from 'nextjs-toploader';
import { headers } from 'next/headers';

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
  themeColor: '#ffffff'
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const headersList = await headers();
  const isAuthorize = headersList.get('x-maru-authorize') === 'true';

  return (
    <html lang="ko">
      <Adsense />
      <body className="antialiased">
        <NextTopLoader color="#16A34A" height={2} showSpinner={false} />
        <Navbar authorize={isAuthorize} />
        <section className="pt-[65px]">{children}</section>
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
          containerStyle={{
            top: 32
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-H5T4L44K0V" />
    </html>
  );
};

export default RootLayout;
