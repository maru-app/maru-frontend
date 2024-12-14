import { FC } from 'react';

const Page: FC = () => {
  return (
    <div>
      <div className="fixed w-full border-b bg-white/50 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <p className="font-hahmlet text-[26px] font-bold">마루</p>
          <div className="flex space-x-8">
            <p className="rounded-md px-3 py-1.5 hover:bg-gray-200">소개</p>
            <p className="rounded-md px-3 py-1.5 hover:bg-gray-200">랭킹</p>
            <p className="rounded-md px-3 py-1.5 hover:bg-gray-200">개인정보</p>
          </div>
          <button type="button" className="rounded-md bg-emerald-500 px-3 py-2 text-sm font-bold text-white">
            로그인
          </button>
        </div>
      </div>

      <div className="h-96 bg-gray-100 pt-16">
        <div className="mx-auto flex h-full max-w-screen-xl flex-col justify-center">
          <div>
            <h1 className="text-4xl font-bold">
              나만의 일기을 쓰는 공간,
              <br />
              여기는 <span className="font-hahmlet text-emerald-500">마루</span>입니다.
            </h1>
            <button type="button" className="mt-4 rounded-md bg-black px-3 py-2 text-white">
              시작하기
            </button>
          </div>
        </div>
      </div>

      <div className="mt-48 text-center">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <h1 className="text-4xl font-bold">
            언제 어디서든, 나만의 <span className="text-emerald-500">일기</span>를
            <br />
            사용해보세요
          </h1>
          <p className="mt-6 text-xl font-bold">브라우저만 있다면 어디서든, 일기를 쓸 수 있어요.</p>
          <div className="mt-10 h-96 w-full rounded-lg bg-gray-100">(멋진 사진과 설명 그리고 무언가...)</div>
        </div>
      </div>

      <div className="mt-48 text-center">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <h1 className="text-4xl font-bold">
            이 일기는 <span className="text-emerald-500">나만</span>
            <br />볼 수 있어요
          </h1>
          <p className="text-xl font-bold">강력한 암호화로 나만 볼 수 있는 일기가 완성돼요.</p>
          <div className="mt-10 h-96 w-full rounded-lg bg-gray-100">(멋진 사진과 설명 그리고 무언가...)</div>
        </div>
      </div>

      <div className="mt-48 text-center">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <h1 className="text-4xl font-bold">
            매일매일 일기 쓰기,
            <br />
            <span className="text-emerald-500">도전</span>해보세요
          </h1>
          <p className="mt-6 text-xl font-bold">매일 일기를 쓰고 연속 기록을 유지해보세요.</p>
          <div className="mt-10 h-96 w-full rounded-lg bg-gray-100">(멋진 사진과 설명 그리고 무언가...)</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
