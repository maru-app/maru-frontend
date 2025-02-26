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
  const response = await fetch(`${API_HOST}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({ nickname }),
    ...(await getCommonFetchConfig({
      'X-Maru-RegisterToken': registerToken
    }))
  });

  const cookie = response.headers.get('set-cookie');
  const token = cookie?.split(';');
  token?.forEach((t) => {
    const [key, value] = t.split('=');
    if (key === '_maruToken') {
      const cookieStore = cookies();
      cookieStore.then((store) => {
        store.set('_maruToken', value);
      });
    }
  });
};
