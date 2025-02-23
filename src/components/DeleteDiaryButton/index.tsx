'use client';

import { FC } from 'react';
import Button from '@/components/Button';
import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteDiary } from '@/api/mutation/diary-mutation';
import { useRouter } from 'next/navigation';

interface DeleteDiaryButtonProps {
  readonly diaryId: number;
}

const DeleteDiaryButton: FC<DeleteDiaryButtonProps> = ({ diaryId }) => {
  const router = useRouter();

  const handleDelete = () => {
    deleteDiary(diaryId).then(() => {
      router.push('/diary');
    });
  };

  return (
    <>
      <Button
        className="bg-red-500 text-white hover:bg-red-600"
        onClick={handleDelete}
        data-tooltip-id="tooltip"
        data-tooltip-content="삭제하기"
      >
        <TrashIcon className="size-4" />
      </Button>
    </>
  );
};

export default DeleteDiaryButton;
