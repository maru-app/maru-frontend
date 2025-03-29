import { FC, useCallback, useMemo } from 'react';
import { cn } from '@/utils/cn';
import { range } from '@/utils/range';

interface StreakGraphProps {
  readonly year: number;
  readonly streaks: Record<string, number>;
}

const DAY_MAP = ['일', '월', '화', '수', '목', '금', '토'];
const MONTH_MAP = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

const StreakGraph: FC<StreakGraphProps> = ({ year, streaks }) => {
  const daysSinceYear = useMemo(() => {
    let startOfYear = new Date(year, 0, 1);
    let today = new Date(year, 11, 31);
    const diffTime = today.getTime() - startOfYear.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  }, [year]);

  const newYearDayIndex = useMemo(() => new Date(year, 0, 1).getDay(), [year]);

  const monthPositions = useMemo(() => {
    return range(13).map((month) => {
      const firstDayOfMonth = new Date(year, month, 1);
      const daysSinceYearStart = Math.floor(
        (firstDayOfMonth.getTime() - new Date(year, 0, 1).getTime()) / (1000 * 60 * 60 * 24)
      );
      return {
        month: MONTH_MAP[month],
        position: daysSinceYearStart / 7
      };
    });
  }, [year, newYearDayIndex]);

  const getDateByIndex = useCallback(
    (index: number) => {
      const date = new Date(year, 0, 1);
      date.setDate(date.getDate() + index);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    },
    [year]
  );

  return (
    <div className="flex space-x-4">
      <div className="mt-0.5">
        {DAY_MAP.map((day) => (
          <p key={`streak-day-${day}`} className="mt-[-1.8px] text-sm text-gray-500">
            {day}
          </p>
        ))}
      </div>

      <div className="flex flex-col">
        <div className="flex max-h-32 flex-1 flex-col flex-wrap">
          {range(newYearDayIndex).map((_, idx) => (
            <span key={`streak-empty-${idx}`} className="ml-0.5 mt-0.5 h-4 w-4 bg-transparent" />
          ))}
          {range(daysSinceYear).map((_, idx) => {
            const date = getDateByIndex(idx);
            const count = streaks[date] ?? 0;
            return (
              <span
                data-tooltip-id="tooltip"
                data-tooltip-content={`${date} : ${count}편`}
                key={`streak-date-${idx}`}
                className={cn(
                  'ml-0.5 mt-0.5 h-4 w-4 rounded-md bg-gray-300',
                  count >= 1 ? 'bg-green-600/70' : 'bg-gray-300/70'
                )}
              />
            );
          })}
        </div>

        <div className="relative mt-7 flex">
          {monthPositions.map((item, idx) => (
            <div
              key={`month-${idx}`}
              className="absolute bottom-0 w-7 text-sm text-gray-500"
              style={{
                left: idx === 0 ? 0 : `${item.position * 18}px`
              }}
            >
              {item.month}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreakGraph;
