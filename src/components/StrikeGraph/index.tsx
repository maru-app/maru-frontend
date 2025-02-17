import { FC } from 'react';
import { cn } from '@/utils/cn';

interface StrikeGraphProps {
  readonly year?: number;
}

const DAY_MAP = ['일', '월', '화', '수', '목', '금', '토'];

const StrikeGraph: FC<StrikeGraphProps> = ({ year }) => {
  const getWeekOfYear = () => {
    const today = new Date();
    const dayNum = today.getUTCDay() || 7;
    today.setUTCDate(today.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(year ?? today.getUTCFullYear(), 0, 1));
    return Math.ceil(((+today - +yearStart) / 86400000 + 1) / 7);
  };

  return (
    <div className="space-y-0.5">
      {new Array(7).fill(0).map((_, index) => (
        <div key={`row-${index}`} className="flex justify-center space-x-0.5">
          <span className="-mt-0.5 mr-3 text-sm text-gray-500">{DAY_MAP[index]}</span>
          {new Array(getWeekOfYear()).fill(0).map((_, j) => (
            <div
              key={`row-${index}-${j}`}
              className={cn(
                'h-4 w-4 rounded-md bg-gray-300/70',
                Math.random() > 0.5 ? 'bg-emerald-500/70' : 'bg-gray-300/70'
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default StrikeGraph;
