'use client';

import { FC } from 'react';
import Button from '@/components/Button';
import { logoutMutation } from '@/api/mutation/auth-mutation';
import { useRouter } from 'next/navigation';

const LogoutButton: FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutMutation();
    await router.push('/');
  };

  return (
    <Button type="button" className="bg-red-500 px-5 text-white hover:bg-red-600" onClick={handleLogout}>
      로그아웃
    </Button>
  );
};

export default LogoutButton;
