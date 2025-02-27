import { FC, useMemo } from 'react';
import { cn } from '@/utils/cn';

interface StrikeGraphProps {
  readonly year: number;
}

const DAY_MAP = ['일', '월', '화', '수', '목', '금', '토'];

const StrikeGraph: FC<StrikeGraphProps> = ({ year }) => {
  const daysSinceYear = useMemo(() => {
    let startOfYear = new Date(year, 0, 1);
    let today = new Date();
    if (new Date().getFullYear() !== year) {
      today = new Date(year, 11, 31);
    }
    const diffTime = today.getTime() - startOfYear.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  }, [year]);
  const newYearDayIndex = useMemo(() => new Date(year, 0, 1).getDay(), [year]);

  return (
    <div className="flex space-x-2">
      <div className="mt-0.5">
        {DAY_MAP.map((day) => (
          <p key={`strike-day-${day}`} className="mt-[-1.8px] text-sm text-gray-500">
            {day}
          </p>
        ))}
      </div>
      <div className="flex max-h-32 flex-col flex-wrap">
        {new Array(newYearDayIndex).fill(0).map((_, idx) => (
          <span key={`strike-empty-${idx}`} className="ml-0.5 mt-0.5 h-4 w-4 bg-transparent" />
        ))}
        {new Array(daysSinceYear).fill(0).map((_, idx) => (
          <span
            key={`strike-date-${idx}`}
            className={cn(
              'ml-0.5 mt-0.5 h-4 w-4 rounded-md bg-gray-300',
              Math.random() > 0.5 ? 'bg-emerald-500/70' : 'bg-gray-300/70'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default StrikeGraph;
