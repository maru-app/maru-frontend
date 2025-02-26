'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';

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
