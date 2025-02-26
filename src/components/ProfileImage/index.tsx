'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

const Avvvatars = dynamic(() => import('avvvatars-react'), { ssr: false });

interface ProfileImageProps {
  readonly nickname: string;
}

const ProfileImage: FC<ProfileImageProps> = ({ nickname }) => {
  return <Avvvatars value={nickname} size={64} />;
};

export default ProfileImage;
