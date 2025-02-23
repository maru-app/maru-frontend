'use client';

import { FC } from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const PageBackwardButton: FC = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} data-tooltip-id="tooltip" data-tooltip-content="뒤로가기">
      <ChevronLeftIcon className="size-5" />
    </Button>
  );
};

export default PageBackwardButton;
