import { FC } from 'react';
import Container from '@/components/Container';
import { getAllStreakQuery } from '@/api/query/streak-query';
import { getDateString } from '@/utils/date';
import { MotionH1 } from '../MotionElement';
import LandingBanner from '@/assets/images/landing-banner.png';
import Image from 'next/image';
import DynamicIntroduce from '@/components/Landing/DynamicIntroduce';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

const Jumbotron: FC = async () => {
  const allStreak = await getAllStreakQuery(new Date().getFullYear());
  const error = allStreak.error;
  const todayStreak = allStreak.result?.find((s) => s.date === getDateString(new Date())) ?? undefined;
  const textStatus = error ? 'UNAUTHORIZED' : todayStreak ? 'WRITE' : 'NOT_WRITE';

  return (
    <section className="relative h-[calc(100vh-66px)] lg:h-[38rem]">
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <Image
          src={LandingBanner}
          alt={'다양한 이모지가 있는 소개 이미지'}
          className="-z-10 h-full w-full object-cover"
        />
      </div>
      <div className="absolute left-0 top-0 z-[-1] -mt-12 h-[30rem] w-full bg-gradient-to-b from-white"></div>
      <Container className="flex h-full flex-col items-center">
        <div className="mt-20 text-center lg:mt-28">
          <MotionH1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mb-2 text-3xl font-bold"
          >
            나만의 일기를 쓰는 공간 <span className="font-dodamdodam text-4xl">마루</span>
          </MotionH1>
          <DynamicIntroduce status={textStatus} />
        </div>
        <div className="absolute bottom-8 block animate-bounce lg:hidden">
          <ArrowDownIcon className="size-6 text-gray-500/70" />
        </div>
      </Container>
    </section>
  );
};

export default Jumbotron;
