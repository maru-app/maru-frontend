'use client';

import { FC } from 'react';
import Avvvatars from 'avvvatars-react';

interface ProfileImageProps {
  readonly nickname: string;
}

const ProfileImage: FC<ProfileImageProps> = ({ nickname }) => {
  return <Avvvatars value={nickname} size={64} />;
};

export default ProfileImage;
