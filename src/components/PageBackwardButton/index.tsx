'use client';

import { FC } from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const PageBackwardButton: FC = () => {
  const router = useRouter();

  return (
    <Button className="bg-gray-100 py-3" variance="text" onClick={() => router.back()}>
      뒤로가기
    </Button>
  );
};

export default PageBackwardButton;
