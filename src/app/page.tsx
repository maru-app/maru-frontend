import { FC } from 'react';
import Jumbotron from '@/components/Jumbotron';
import Container from '@/components/Container';

const Page: FC = () => {
  return (
    <>
      <Jumbotron />

      <Container>
        <div className="mt-44 flex flex-col justify-around space-y-6 lg:flex-row lg:space-y-0">
          <div>
            <h3 className="text-3xl font-bold">
              이 일기는 <span className="text-green-600">나만</span>
              <br />볼 수 있어요
            </h3>
            <p className="mt-4 text-lg">작성된 일기는 암호화되어 오직 나만 볼 수 있어요.</p>
          </div>

          <div className="border-0 border-r border-gray-200"></div>

          <div>
            <h3 className="text-3xl font-bold">
              <span className="text-green-600">언제 어디서든</span>, 나만의 일기를
              <br />
              사용해보세요
            </h3>
            <p className="mt-4 text-lg">브라우저만 있다면 어디서든, 일기를 쓸 수 있어요.</p>
          </div>

          <div className="border-0 border-r border-gray-200"></div>

          <div>
            <h3 className="text-3xl font-bold">
              <span className="text-green-600">매일매일</span> 일기 쓰기,
              <br />
              <span className="text-green-600">도전</span>해보세요
            </h3>
            <p className="mt-4 text-lg">매일 일기를 쓰고 연속 기록을 유지해보세요.</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page;
