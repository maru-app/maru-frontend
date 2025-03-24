import { FC } from 'react';
import Page from './page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '랭킹'
};

const Layout: FC = () => {
  return <Page />;
};

export default Layout;
