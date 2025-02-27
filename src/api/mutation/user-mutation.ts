'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';
import { cookies } from 'next/headers';

export interface UpdateUserMutationParams {
  readonly nickname: string;
}
export const updateUserMutation = async ({ nickname }: UpdateUserMutationParams): Promise<void> => {
  await fetch(`${API_HOST}/user`, {
    method: 'PUT',
    body: JSON.stringify({ nickname }),
    ...(await getCommonFetchConfig())
  });
};

export const deleteUserMutation = async (): Promise<void> => {
  await fetch(`${API_HOST}/user`, {
    method: 'DELETE',
    ...(await getCommonFetchConfig())
  });
  const cookieStore = await cookies();
  cookieStore.delete('_maruToken');
};
