'use client';

import { FC } from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const PageBackwardButton: FC = () => {
  const router = useRouter();

  return <Button onClick={() => router.back()}>뒤로가기</Button>;
};

export default PageBackwardButton;
