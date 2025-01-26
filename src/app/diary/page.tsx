import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { FC } from 'react';
import StrikeGraph from '@/components/StrikeGraph';

const Page: FC = () => {
  return (
    <Container className="mt-20">
      <PageTitle title="내 일기" description="새로운 일기를 쓰거나 지금까지 쓴 일기를 확인해보세요." />
      <div className="mt-10">
        <h2 className="text-2xl font-bold">연속 기록</h2>
        <div className="mt-2 w-full rounded-md border-2 border-gray-200 p-4">
          <h3 className="mb-3 text-xl font-bold">
            지금까지 연속 기록을 <span className="text-green-500">1일</span> 유지 중이에요.
          </h3>
          <div className="flex items-center justify-between">
            <StrikeGraph />
            <div className="space-y-2">
              <p className="cursor-pointer rounded-md bg-gray-100 p-2.5 text-center">2025년</p>
              <p className="cursor-pointer rounded-md p-2.5 text-center hover:bg-gray-100">2024년</p>
              <p className="cursor-pointer rounded-md p-2.5 text-center hover:bg-gray-100">2023년</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold">작성한 일기</h2>
        <div className="grid grid-cols-4 gap-x-4 gap-y-2">
          <div className="group mt-2 cursor-pointer rounded-md border-2 border-gray-200 p-4 hover:bg-gray-100">
            <p className="break-keep text-lg font-bold group-hover:underline">
              일기 요약겸 제목이 들어가면 좋을 거 같아요
            </p>
            <p className="text-lg">25년 1월 1일 일기</p>
            <p />
          </div>
          <div className="group mt-2 cursor-pointer rounded-md border-2 border-gray-200 p-4 hover:bg-gray-100">
            <p className="break-keep text-lg font-bold group-hover:underline">
              일기 요약겸 제목이 들어가면 좋을 거 같아요
            </p>
            <p className="text-lg">25년 1월 1일 일기</p>
            <p />
          </div>
          <div className="group mt-2 cursor-pointer rounded-md border-2 border-gray-200 p-4 hover:bg-gray-100">
            <p className="break-keep text-lg font-bold group-hover:underline">
              일기 요약겸 제목이 들어가면 좋을 거 같아요
            </p>
            <p className="text-lg">25년 1월 1일 일기</p>
            <p />
          </div>
          <div className="group mt-2 cursor-pointer rounded-md border-2 border-gray-200 p-4 hover:bg-gray-100">
            <p className="break-keep text-lg font-bold group-hover:underline">
              일기 요약겸 제목이 들어가면 좋을 거 같아요
            </p>
            <p className="text-lg">25년 1월 1일 일기</p>
            <p />
          </div>
          <div className="group mt-2 cursor-pointer rounded-md border-2 border-gray-200 p-4 hover:bg-gray-100">
            <p className="break-keep text-lg font-bold group-hover:underline">
              일기 요약겸 제목이 들어가면 좋을 거 같아요
            </p>
            <p className="text-lg">25년 1월 1일 일기</p>
            <p />
          </div>
          <div className="group mt-2 cursor-pointer rounded-md border-2 border-gray-200 p-4 hover:bg-gray-100">
            <p className="break-keep text-lg font-bold group-hover:underline">
              일기 요약겸 제목이 들어가면 좋을 거 같아요
            </p>
            <p className="text-lg">25년 1월 1일 일기</p>
            <p />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
