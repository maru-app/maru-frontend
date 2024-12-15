import { FC } from 'react';
import Container from '@/components/Container';

const Footer: FC = () => {
  return (
    <footer className="mt-48 h-72 border-t">
      <Container className="flex h-full flex-col justify-center">
        <h1 className="font-hahmlet text-xl font-bold">마루</h1>
        <p className="ml-[1px] text-lg">나만의 일기를 쓰는 공간.</p>
        <a
          className="ml-[1px] mt-4 text-sm"
          href="https://github.com/SkyLightQP/maru-frontend"
          target="_blank"
          rel="noreferrer"
        >
          View source on GitHub
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
