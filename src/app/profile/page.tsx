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
import WithdrawButton from '@/components/WithdrawButton';

const Page: FC = () => {
  const [myInfo, setMyInfo] = useState<GetMyInfoQueryReturn | null>(null);
  const [isPublicRanking, setIsPublicRanking] = useState<boolean>(false);

  const fetchMyInfo = useCallback(() => {
    getMyInfoQuery().then((data) => {
      if (data.result === undefined || data.error) {
        toast.error('내 정보를 가져올 수가 없어요. 잠시후 다시 시도해주세요.');
        return;
      }
      setMyInfo(data.result);
      setIsPublicRanking(data.result.isPublicRanking);
    });
  }, []);

  useEffect(() => {
    fetchMyInfo();
  }, []);

  const onSubmit = async (formData: FormData) => {
    const nickname = formData.get('nickname');

    await updateUserMutation({
      nickname: String(nickname).trim() ?? myInfo?.nickname.trim(),
      isPublicRanking
    });

    toast('내 정보를 변경했어요.', { icon: EMOJI_LIST.PENCIL });

    fetchMyInfo();
  };

  return (
    <Container className="mt-12 lg:mt-20">
      <PageTitle title="프로필" description="내 정보를 관리해보세요." />
      <form action={onSubmit}>
        <div className="mt-10">
          <p className="text-lg font-bold">프로필 사진</p>
          <p className="mb-2 text-sm text-gray-400">프로필 사진 변경은 추후 제공 예정이에요.</p>
          <ProfileImage nickname={myInfo?.nickname ?? ''} />
        </div>

        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">연동된 소셜로그인</p>
          <Input
            className="cursor-no-drop outline-none"
            defaultValue={myInfo?.vendor && VENDOR[myInfo?.vendor]}
            readOnly
          />
        </div>

        <div className="mt-10">
          <p className="text-lg font-bold">연동된 이메일</p>
          <p className="mb-2 text-sm text-gray-400">연동된 이메일은 변경할 수 없어요.</p>
          <Input className="cursor-no-drop outline-none" defaultValue={myInfo?.email ?? ''} readOnly />
        </div>

        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">닉네임</p>
          <Input name="nickname" defaultValue={myInfo?.nickname ?? ''} />
        </div>

        <div className="mt-10">
          <p className="text-lg font-bold">연속 기록 공개여부</p>
          <div className="flex space-x-4">
            <span className="space-x-2">
              <input
                type="radio"
                name="streak"
                id="public"
                value="public"
                checked={isPublicRanking}
                onChange={() => setIsPublicRanking(true)}
              />
              <label htmlFor="public">공개</label>
            </span>
            <span className="space-x-2">
              <input
                type="radio"
                name="streak"
                id="private"
                value="private"
                checked={!isPublicRanking}
                onChange={() => setIsPublicRanking(false)}
              />
              <label htmlFor="private">비공개</label>
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-end space-x-2">
          <LogoutButton />
          <WithdrawButton />
          <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">
            저장
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Page;
