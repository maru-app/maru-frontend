import { FC } from 'react';
import Container from '@/components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="mt-48 h-72 border-t">
      <Container className="flex h-full items-center justify-between">
        <div>
          <h1 className="font-hahmlet text-xl font-bold">마루</h1>
          <p className="ml-[1px] text-gray-400">나만의 일기를 쓰는 공간.</p>
        </div>
        <div>
          <div className="flex flex-col space-y-0.5 text-right">
            <Link href="/tos" className="text-gray-400 hover:text-gray-500">
              이용약관
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-gray-500">
              개인정보 처리방침
            </Link>
          </div>
          <div className="mt-4 flex justify-end">
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
