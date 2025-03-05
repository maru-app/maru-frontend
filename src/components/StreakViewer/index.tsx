'use client';

import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import StreakGraph from '../StreakGraph';
import Button from '@/components/Button';
import { getAllStreakQuery, GetAllStreakQueryReturn } from '@/api/query/streak-query';
import toast from 'react-hot-toast';

const StreakViewer: FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [allStreak, setAllStreak] = useState<GetAllStreakQueryReturn>([]);

  const fetchData = useCallback(async (year: number) => {
    const allStreakResponse = await getAllStreakQuery(year);

    if (allStreakResponse.error) {
      toast.error('지금은 연속 기록 그래프를 불러올 수 없어요. 잠시후 다시 시도해주세요.');
      return;
    }

    if (allStreakResponse.result) {
      setAllStreak(allStreakResponse.result);
    }
  }, []);

  useEffect(() => {
    fetchData(year).then();
  }, [year]);

  const streakMap = useMemo(() => {
    const map: Record<string, number> = {};
    allStreak.forEach((streak) => {
      map[streak.date] = streak.count;
    });
    return map;
  }, [allStreak]);

  const streakYears = useMemo(() => {
    return Array.from(new Set(Object.keys(streakMap).map((date) => date.slice(0, 4))));
  }, [streakMap]);

  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <div className="flex overflow-x-auto">
        <StreakGraph year={year} streaks={streakMap} />
      </div>
      <div className="ml-4 mt-4 flex flex-shrink-0 space-x-2 lg:mt-0 lg:block lg:space-x-0 lg:space-y-2">
        {streakYears.map((streakYear) => (
          <Button
            key={`streak-button-${streakYear}`}
            variance="text"
            active={year === Number(streakYear)}
            onClick={() => setYear(Number(streakYear))}
          >
            {streakYear}년
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StreakViewer;
