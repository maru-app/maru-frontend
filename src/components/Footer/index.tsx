import { FC } from 'react';
import Container from '@/components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: FC = () => {
  return (
    <footer className="mt-48 h-72 border-t">
      <Container className="flex h-full items-center justify-between">
        <div>
          <h1 className="font-hahmlet text-xl font-bold">마루</h1>
          <p className="ml-[1px] text-gray-400">나만의 일기를 쓰는 공간.</p>
        </div>
        <div>
          <a
            href="https://github.com/SkyLightQP/maru-frontend"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faGithub} className="size-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
