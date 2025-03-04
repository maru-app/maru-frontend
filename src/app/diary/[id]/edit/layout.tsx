import { FC } from 'react';
import Page from './page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '일기 수정'
};

const Layout: FC = () => {
  return <Page />;
};

export default Layout;
