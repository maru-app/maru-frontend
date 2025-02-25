'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';
import { cookies } from 'next/headers';

export const logoutMutation = async (): Promise<void> => {
  await fetch(`${API_HOST}/auth/logout`, {
    method: 'DELETE',
    ...(await getCommonFetchConfig())
  });
  const cookieStore = await cookies();
  cookieStore.delete('_maruToken');
};

export interface RegisterMutationParams {
  readonly nickname: string;
  readonly registerToken: string;
}
export const registerMutation = async ({ nickname, registerToken }: RegisterMutationParams): Promise<void> => {
  await fetch(`${API_HOST}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({ nickname }),
    ...(await getCommonFetchConfig({
      'X-Maru-RegisterToken': registerToken
    }))
  });
};
