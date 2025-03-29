'use client';

import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { FC, useEffect, useState } from 'react';
import { getStreakRankingQuery, GetStreakRankingQueryReturn } from '@/api/query/streak-query';
import Button from '@/components/Button';
import { cn } from '@/utils/cn';

const Page: FC = () => {
  const [rankingData, setRankingData] = useState<GetStreakRankingQueryReturn | null>(null);
  const [size, setSize] = useState<number>(50);

  const rankStyleMap: Record<number, string> = {
    1: 'text-amber-600',
    2: 'text-gray-700',
    3: 'text-amber-950'
  };

  useEffect(() => {
    const year = new Date().getFullYear();
    getStreakRankingQuery(year, size).then((data) => {
      setRankingData(data.result ?? null);
    });
  }, [size]);

  const handlePagination = () => {
    if (rankingData === null) return;
    if (rankingData.page.number + 1 >= rankingData.page.totalPages) return;
    setSize(size + 50);
  };

  if (rankingData === null) {
    return <></>;
  }

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="랭킹" description="높은 연속 기록을 유지 중인 사용자들을 만나보세요." />
      <p className="mt-1 text-sm text-gray-400">* 연속 기록을 공개로 설정한 사용자만 닉네임이 표시돼요.</p>

      <table className="mt-16 w-full">
        <thead className="border-b border-gray-200 text-left text-lg">
          <tr className="text-left">
            <th className="w-1/6 py-3">#</th>
            <th className="w-1/4 py-3">닉네임</th>
            <th className="w-1/4 py-3">연속 기록</th>
          </tr>
        </thead>
        <tbody>
          {rankingData.content.length > 0 &&
            rankingData.content.map((rank) => (
              <tr key={`rank-${rank.rank}-${rank.nickname}`} className="border-b border-gray-200 text-left">
                <td className={cn('w-1/6 py-3', rankStyleMap[rank.rank] ?? 'text-black')}>{rank.rank}</td>
                <td className="w-1/4 py-3">{rank.nickname === '' ? '비공개' : rank.nickname}</td>
                <td className={cn('w-1/4 py-3', rank.rank === 1 && 'text-green-600')}>{rank.streak}일</td>
              </tr>
            ))}
        </tbody>
      </table>

      {rankingData.page.number + 1 < rankingData.page.totalPages && (
        <Button className="mt-8 w-full py-5" onClick={handlePagination}>
          더보기
        </Button>
      )}
    </Container>
  );
};

export default Page;
