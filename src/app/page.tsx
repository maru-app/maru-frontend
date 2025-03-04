import { FC } from 'react';
import Jumbotron from '@/components/Jumbotron';
import Container from '@/components/Container';
import Link from 'next/link';

const Page: FC = () => {
  return (
    <>
      <div className="flex h-10 w-full items-center justify-center bg-stone-800 text-center text-lg text-white hover:underline">
        <Link href="/survey">마루에 대한 피드백을 받고 있어요</Link>
      </div>

      <Jumbotron />

      <Container>
        <div className="mt-44 flex flex-col justify-around space-y-6 lg:flex-row lg:space-y-0">
          <div>
            <h1 className="text-3xl font-bold">
              이 일기는 <span className="text-emerald-500">나만</span>
              <br />볼 수 있어요
            </h1>
            <p className="mt-4 text-lg">브라우저만 있다면 어디서든, 일기를 쓸 수 있어요.</p>
          </div>

          <div className="border-0 border-r border-gray-200"></div>

          <div>
            <h1 className="text-3xl font-bold">
              언제 어디서든, 나만의 <span className="text-emerald-500">일기</span>를
              <br />
              사용해보세요
            </h1>
            <p className="mt-4 text-lg">작성된 일기는 암호화되어 오직 나만 볼 수 있어요.</p>
          </div>

          <div className="border-0 border-r border-gray-200"></div>

          <div>
            <h1 className="text-3xl font-bold">
              매일매일 일기 쓰기,
              <br />
              <span className="text-emerald-500">도전</span>해보세요
            </h1>
            <p className="mt-4 text-lg">매일 일기를 쓰고 연속 기록을 유지해보세요.</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page;
