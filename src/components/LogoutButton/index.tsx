'use client';

import { FC } from 'react';
import Button from '@/components/Button';
import { logoutMutation } from '@/api/mutation/auth-mutation';

const LogoutButton: FC = () => {
  return (
    <Button type="button" className="bg-red-500 px-5 text-white hover:bg-red-600" onClick={() => logoutMutation()}>
      로그아웃
    </Button>
  );
};

export default LogoutButton;
