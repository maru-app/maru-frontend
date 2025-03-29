import { FC } from 'react';
import Container from '@/components/Container';
import Link from 'next/link';
import { getAllStreakQuery } from '@/api/query/streak-query';
import { getDateString } from '@/utils/date';
import { MotionButton, MotionH1 } from '../MotionElement';

const Jumbotron: FC = async () => {
  const allStreak = await getAllStreakQuery(new Date().getFullYear());
  const error = allStreak.error;
  const todayStreak = allStreak.result?.find((s) => s.date === getDateString(new Date())) ?? undefined;

  return (
    <section className="h-[28rem] bg-[#C9E9D2]">
      <Container className="flex h-full flex-col justify-center">
        <div>
          <h1 className="mb-2">나만의 일기를 쓰는 공간, 마루</h1>
          {error !== undefined && (
            <>
              <MotionH1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mb-1.5 text-3xl font-bold lg:text-4xl"
              >
                일기 내용 암호화{' '}
                <span role="img" aria-label="자물쇠와 펜 이모지">
                  🔏
                </span>
              </MotionH1>
              <MotionH1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
                className="text-3xl font-bold lg:text-4xl"
              >
                마루에서 나만의 일기를&nbsp;
                <br className="lg:hidden" />
                완성해보세요
              </MotionH1>
              <MotionButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
                className="mt-8 inline-block bg-green-600 text-white hover:bg-green-700"
                as={Link}
                href="/login"
              >
                시작하기
              </MotionButton>
            </>
          )}

          {error === undefined && todayStreak === undefined && (
            <>
              <MotionH1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mb-1.5 text-3xl font-bold lg:text-4xl"
              >
                오늘 하루는 어떠셨나요?
              </MotionH1>
              <MotionH1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
                className="text-3xl font-bold lg:text-4xl"
              >
                마루에서 일상을 <br className="lg:hidden" />
                기록해보세요
              </MotionH1>
              <MotionButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
                className="mt-8 inline-block bg-green-600 text-white hover:bg-green-700"
                as={Link}
                href="/write"
              >
                일기쓰기
              </MotionButton>
            </>
          )}

          {todayStreak && (
            <>
              <MotionH1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mb-1.5 text-3xl font-bold lg:text-4xl"
              >
                내일도 일기를 쓰고
              </MotionH1>
              <MotionH1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
                className="text-3xl font-bold lg:text-4xl"
              >
                연속 기록을 유지해보세요
              </MotionH1>
              <MotionButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
                className="mt-8 inline-block bg-green-600 text-white hover:bg-green-700"
                as={Link}
                href="/diary"
              >
                일기보기
              </MotionButton>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Jumbotron;
