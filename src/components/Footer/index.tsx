import { FC } from 'react';
import Container from '@/components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="mt-48 h-72 border-t">
      <Container className="flex h-full flex-col justify-center space-y-8 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div>
          <h1 className="font-hahmlet text-xl font-bold">마루</h1>
          <p className="ml-[1px] text-gray-400">나만의 일기를 쓰는 공간.</p>
          <p className="ml-[1px] mt-1 text-sm text-gray-400">
            <span className="font-hahmlet">마루</span>는{' '}
            <a href="https://daegyeo.me?utm_source=maru" target="_blank" rel="noreferrer" className="underline">
              daegyeo.me
            </a>{' '}
            가 만들어요
          </p>
        </div>
        <div>
          <div className="flex flex-col space-y-0.5 lg:text-right">
            <Link href="/tos" className="text-gray-400 hover:text-gray-500">
              이용약관
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-gray-500">
              개인정보 처리방침
            </Link>
          </div>
          <div className="mt-4 flex lg:justify-end">
            <a
              href="https://github.com/SkyLightQP/maru-frontend"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition ease-in-out hover:text-gray-500"
            >
              <FontAwesomeIcon icon={faGithub} className="size-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
