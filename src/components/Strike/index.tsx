import { FC } from 'react';
import StrikeGraph from '@/components/StrikeGraph';
import Button from '@/components/Button';

const Strike: FC = () => {
  return (
    <div className="mt-2 w-full rounded-md border border-gray-200 p-4">
      <h3 className="mb-3 text-xl font-bold">
        지금까지 연속 기록을 <span className="text-emerald-500">1일</span> 유지 중이에요.
      </h3>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex overflow-x-auto">
          <StrikeGraph />
        </div>
        <div className="mt-4 flex space-x-2 lg:mt-0 lg:block lg:space-x-0 lg:space-y-2">
          <Button variance="text" active>
            2025년
          </Button>
          <Button variance="text">2024년</Button>
        </div>
      </div>
    </div>
  );
};

export default Strike;
