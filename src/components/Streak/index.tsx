import { FC } from 'react';
import { getStreakQuery } from '@/api/query/streak-query';
import StreakViewer from '@/components/StreakViewer';
import toast from 'react-hot-toast';

const Streak: FC = async () => {
  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const myStreak = await getStreakQuery(date);
  const streak = myStreak.result?.streak ?? 0;
  const bestStreak = myStreak.result?.bestStreak ?? 0;

  if (myStreak.error) {
    toast.error('지금은 연속 기록을 불러올 수 없어요. 잠시후 다시 시도해주세요.');
  }

  return (
    <div className="mt-2 w-full rounded-md border border-gray-200 p-4">
      <h3 className="mb-3 text-xl font-bold">
        {streak === 0 ? (
          <>
            오늘은 아직 일기를 쓰지 않았어요. 최고 연속 기록은 <span className="text-emerald-500">{bestStreak}일</span>
            이에요.
          </>
        ) : (
          <>
            지금까지 연속 기록을 <span className="text-emerald-500">{streak}일</span> 유지 중이에요. 최장 연속 기록은{' '}
            <span className="text-emerald-500">{bestStreak}일</span>이에요.
          </>
        )}
      </h3>

      <StreakViewer />
    </div>
  );
};

export default Streak;
