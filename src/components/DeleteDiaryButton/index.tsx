'use client';

import { FC } from 'react';
import Button from '@/components/Button';
import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteDiary } from '@/api/mutation/diary-mutation';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { EMOJI_LIST } from '@/constants/emoji';

interface DeleteDiaryButtonProps {
  readonly diaryId: number;
}

const DeleteDiaryButton: FC<DeleteDiaryButtonProps> = ({ diaryId }) => {
  const router = useRouter();

  const handleDelete = () => {
    Swal.fire({
      title: '정말로 삭제할까요?',
      text: '삭제 후에는 복구할 수 없어요.',
      showCancelButton: true,
      confirmButtonText: '삭제하기',
      cancelButtonText: '취소',
      showClass: {
        popup: ''
      },
      hideClass: {
        popup: ''
      }
    }).then((confirm) => {
      if (confirm.isConfirmed) {
        deleteDiary(diaryId).then(() => {
          router.push('/diary');
          toast('일기를 삭제했어요.', { icon: EMOJI_LIST.TRASH });
        });
      }
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
