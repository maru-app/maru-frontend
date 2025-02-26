'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import PageTitle from '@/components/Typography/PageTitle';
import Container from '@/components/Container';
import { getMyInfoQuery, GetMyInfoQueryReturn } from '@/api/query/auth-query';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { VENDOR } from '@/constants/vendor';
import LogoutButton from '@/components/LogoutButton';
import ProfileImage from '@/components/ProfileImage';
import { updateUserMutation } from '@/api/mutation/user-mutation';
import toast from 'react-hot-toast';
import { EMOJI_LIST } from '@/constants/emoji';

const Page: FC = () => {
  const [myInfo, setMyInfo] = useState<GetMyInfoQueryReturn | null>(null);

  const fetchMyInfo = useCallback(() => {
    getMyInfoQuery().then((data) => {
      if (data.result === undefined || data.error) {
        toast.error('내 정보를 가져올 수가 없어요. 잠시후 다시 시도해주세요.');
        return;
      }
      setMyInfo(data.result);
    });
  }, []);

  useEffect(() => {
    fetchMyInfo();
  }, []);

  const onSubmit = async (formData: FormData) => {
    const nickname = formData.get('nickname');
    const streak = formData.get('streak');

    await updateUserMutation({
      nickname: String(nickname) ?? myInfo?.nickname
    });

    toast('내 정보를 변경했어요.', { icon: EMOJI_LIST.PENCIL });

    fetchMyInfo();
  };

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="프로필" description="내 정보를 관리해보세요." />
      <form action={onSubmit}>
        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">프로필 사진</p>
          <p className="mb-2 text-sm text-gray-400">* 프로필 사진 변경은 추후 제공 예정이에요.</p>
          <ProfileImage nickname={myInfo?.nickname ?? ''} />
        </div>

        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">연동된 소셜로그인</p>
          <Input className="cursor-no-drop outline-none" defaultValue={VENDOR[myInfo?.vendor ?? '']} readOnly />
        </div>

        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">닉네임</p>
          <Input name="nickname" defaultValue={myInfo?.nickname ?? ''} />
        </div>

        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">연속 기록 공개여부</p>
          <p className="mb-2 text-sm text-gray-400">
            * 연속 기록 랭킹은 추후 제공 예정이에요. 기본값은 비공개로 설정돼요.
          </p>
          <div className="flex space-x-4">
            <span className="space-x-2">
              <input type="radio" name="streak" id="public" value="public" disabled />
              <label htmlFor="public">공개</label>
            </span>
            <span className="space-x-2">
              <input type="radio" name="streak" id="private" value="private" defaultChecked disabled />
              <label htmlFor="private">비공개</label>
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-end space-x-2">
          <LogoutButton />
          <Button type="button" className="bg-red-500 text-white hover:bg-red-600">
            회원탈퇴
          </Button>
          <Button type="submit" className="bg-emerald-500 text-white hover:bg-emerald-600">
            저장
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Page;
