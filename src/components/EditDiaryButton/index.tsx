'use client';

import { FC } from 'react';
import Button from '@/components/Button';
import { PencilIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

interface EditDiaryButtonProps {
  readonly diaryId: number;
}

const EditDiaryButton: FC<EditDiaryButtonProps> = ({ diaryId }) => {
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => router.push(`/diary/${diaryId}/edit`)}
        data-tooltip-id="tooltip"
        data-tooltip-content="수정하기"
      >
        <PencilIcon className="size-4" />
      </Button>
    </>
  );
};

export default EditDiaryButton;
