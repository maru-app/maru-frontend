import { FC, useRef } from 'react';
import Swal from 'sweetalert2';
import Button from '@/components/Button';
import withReactContent from 'sweetalert2-react-content';
import Input from '@/components/Input';
import toast from 'react-hot-toast';
import { deleteUserMutation } from '@/api/mutation/user-mutation';

const WithdrawButton: FC = () => {
  const confirmInput = useRef<HTMLInputElement | null>(null);

  const handleWithdraw = async () => {
    const response = await withReactContent(Swal).fire({
      title: '정말로 계정 탈퇴를 진행할까요?',
      html: (
        <>
          탈퇴 버튼을 누르면 <b>영구적으로 계정이 삭제</b>돼요.
          <br />
          반드시 아래 정보를 꼭 확인해주세요. <br />
          <br />
          - 모든 일기 내용과 첨부된 사진이 삭제돼요.
          <br />
          - 쌓아온 연속 기록도 함께 삭제돼요.
          <br />- 탈퇴 후에는 철회할 수 없으며 데이터를 복구할 수 없어요.
          <p className="mt-6 text-center">계정 탈퇴를 진행하려면 "탈퇴합니다."를 똑같이 써주세요.</p>
          <div className="mt-2 flex justify-center">
            <Input type="text" placeholder="탈퇴합니다." className="text-base" ref={confirmInput} />
          </div>
        </>
      ),
      showCancelButton: true,
      confirmButtonText: '탈퇴하기',
      cancelButtonText: '취소',
      showClass: {
        popup: ''
      },
      hideClass: {
        popup: ''
      },
      customClass: {
        confirmButton: 'swal-danger'
      },
      preConfirm: () => {
        return confirmInput.current?.value ?? '';
      }
    });

    if (response.isConfirmed) {
      if (response.value !== '탈퇴합니다.') {
        toast.error('탈퇴 확인 문구가 올바르지 않아요.');
        return;
      }

      await deleteUserMutation();
      window.location.reload();
    }
  };

  return (
    <Button type="button" className="bg-red-500 text-white hover:bg-red-600" onClick={handleWithdraw}>
      계정탈퇴
    </Button>
  );
};

export default WithdrawButton;
