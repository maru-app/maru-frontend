'use server';

import { API_HOST, ApiResponse, createApiFetchError, interceptResponse } from '@/api';
import { getCommonFetchConfig } from '@/api/config';
import { cookies } from 'next/headers';

export interface UpdateUserMutationParams {
  readonly nickname: string;
}

export const updateUserMutation = async ({ nickname }: UpdateUserMutationParams): Promise<ApiResponse<void>> => {
  try {
    const response = await fetch(`${API_HOST}/user`, {
      method: 'PUT',
      body: JSON.stringify({ nickname }),
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};

export const deleteUserMutation = async (): Promise<ApiResponse<void>> => {
  try {
    const response = await fetch(`${API_HOST}/user`, {
      method: 'DELETE',
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response, async () => {
      const cookieStore = await cookies();
      cookieStore.delete('_maruToken');
    });
  } catch (error) {
    return createApiFetchError();
  }
};
