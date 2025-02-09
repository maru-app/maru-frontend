import { FC } from 'react';
import PageTitle from '@/components/Typography/PageTitle';
import Container from '@/components/Container';
import { getMyInfoQuery } from '@/api/query/auth-query';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { VENDOR } from '@/constants/vendor';
import LogoutButton from '@/components/LogoutButton';
import Avvvatars from 'avvvatars-react';
import ProfileImage from '@/components/ProfileImage';

const Page: FC = async () => {
  const myInfo = await getMyInfoQuery();

  const onSubmit = async (formData: FormData) => {
    'use server';

    const nickname = formData.get('nickname');
    const streak = formData.get('streak');
  };

  return (
    <Container className="mt-20">
      <PageTitle title="프로필" description="내 정보를 관리해보세요." />
      <form action={onSubmit}>
        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">프로필 사진</p>
          <p className="mb-2 text-sm text-gray-400">* 프로필 사진 변경은 추후 제공 예정이에요.</p>
          <ProfileImage nickname={myInfo.result?.nickname ?? ''} />
        </div>
        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">연동된 소셜로그인</p>
          <Input
            className="w-1/2 cursor-no-drop outline-none"
            defaultValue={VENDOR[myInfo.result?.vendor ?? '']}
            readOnly
          />
        </div>
        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">닉네임</p>
          <Input className="w-1/2" name="nickname" defaultValue={myInfo.result?.nickname ?? ''} />
        </div>
        <div className="mt-10">
          <p className="mb-1 text-lg font-bold">연속 기록 공개여부</p>
          <div className="flex space-x-4">
            <span className="space-x-2">
              <input type="radio" name="streak" id="public" value="public" defaultChecked />
              <label htmlFor="public">공개</label>
            </span>
            <span className="space-x-2">
              <input type="radio" name="streak" id="private" value="private" />
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
