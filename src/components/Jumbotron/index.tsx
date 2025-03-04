'use client';

import { FC } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionButton = motion.create(Button);

const Jumbotron: FC = () => {
  return (
    <section className="h-[28rem] bg-emerald-400">
      <Container className="flex h-full flex-col justify-center">
        <div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="text-3xl font-bold lg:text-4xl"
          >
            나만의 일기를 쓰는 공간,
          </motion.h1>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
            className="text-3xl font-bold lg:text-4xl"
          >
            여기는 <span className="font-hahmlet text-gray-50">마루</span>입니다.
          </motion.h1>
          <MotionButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 }}
            className="mt-6 inline-block bg-black text-white hover:bg-stone-900"
            as={Link}
            href="/diary"
          >
            시작하기
          </MotionButton>
        </div>
      </Container>
    </section>
  );
};

export default Jumbotron;
