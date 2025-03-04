import { FC } from 'react';
import Page from './page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이어서 회원가입하기'
};

const Layout: FC = () => {
  return <Page />;
};

export default Layout;
