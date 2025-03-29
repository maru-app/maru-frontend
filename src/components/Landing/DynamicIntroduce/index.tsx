'use client';

import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MotionButton } from '@/components/Landing/MotionElement';

interface DynamicIntroduceProps {
  readonly status: 'UNAUTHORIZED' | 'NOT_WRITE' | 'WRITE';
}

const DynamicIntroduce: FC<DynamicIntroduceProps> = ({ status }) => {
  return (
    <>
      {status === 'UNAUTHORIZED' && (
        <>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
            className="mb-1.5 text-3xl font-bold lg:text-4xl"
          >
            일기 내용 전체 암호화
          </motion.h2>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
            className="text-3xl font-bold lg:text-4xl"
          >
            나만의 일기를&nbsp;
            <br className="lg:hidden" />
            완성해보세요
          </motion.h2>
          <MotionButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
            className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-2.5 text-white hover:bg-green-700"
            as={Link}
            href="/login"
          >
            시작하기
          </MotionButton>
        </>
      )}

      {status === 'NOT_WRITE' && (
        <>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
            className="mb-1.5 text-3xl font-bold lg:text-4xl"
          >
            오늘 하루 어떠셨나요?
          </motion.h2>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
            className="text-3xl font-bold lg:text-4xl"
          >
            일상을 기록해보세요
          </motion.h2>
          <MotionButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
            className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-2.5 text-white hover:bg-green-700"
            as={Link}
            href="/write"
          >
            일기쓰기
          </MotionButton>
        </>
      )}

      {status === 'WRITE' && (
        <>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
            className="mb-1.5 text-3xl font-bold lg:text-4xl"
          >
            내일도 쓰고
          </motion.h2>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
            className="text-3xl font-bold lg:text-4xl"
          >
            연속 기록을 유지해보세요
          </motion.h2>
          <MotionButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
            className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-2.5 text-white hover:bg-green-700"
            as={Link}
            href="/diary"
          >
            일기보기
          </MotionButton>
        </>
      )}
    </>
  );
};

export default DynamicIntroduce;
