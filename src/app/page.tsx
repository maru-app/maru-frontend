import { FC } from 'react';
import Jumbotron from '@/components/Jumbotron';
import IntroduceSection from '@/components/IntroduceSection';

const Page: FC = () => {
  return (
    <>
      <Jumbotron />

      <IntroduceSection
        className="mt-48"
        titleContent={
          <h1 className="text-4xl font-bold">
            언제 어디서든, 나만의 <span className="text-emerald-500">일기</span>를
            <br />
            사용해보세요
          </h1>
        }
        description="브라우저만 있다면 어디서든, 일기를 쓸 수 있어요."
      >
        <div className="mt-10 h-96 w-full rounded-lg bg-gray-100">(멋진 사진과 설명 그리고 무언가...)</div>
      </IntroduceSection>

      <IntroduceSection
        className="mt-48"
        titleContent={
          <h1 className="text-4xl font-bold">
            이 일기는 <span className="text-emerald-500">나만</span>
            <br />볼 수 있어요
          </h1>
        }
        description="강력한 암호화로 나만 볼 수 있는 일기가 완성돼요."
      >
        <div className="mt-10 h-96 w-full rounded-lg bg-gray-100">(멋진 사진과 설명 그리고 무언가...)</div>
      </IntroduceSection>

      <IntroduceSection
        className="mt-48"
        titleContent={
          <h1 className="text-4xl font-bold">
            매일매일 일기 쓰기,
            <br />
            <span className="text-emerald-500">도전</span>해보세요
          </h1>
        }
        description="매일 일기를 쓰고 연속 기록을 유지해보세요."
      >
        <div className="mt-10 h-96 w-full rounded-lg bg-gray-100">(멋진 사진과 설명 그리고 무언가...)</div>
      </IntroduceSection>
    </>
  );
};

export default Page;
