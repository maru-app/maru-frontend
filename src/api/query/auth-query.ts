'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';
import { ApiResponse } from '@/api/type/common.type';

type Vendor = 'GOOGLE' | 'NAVER' | 'APPLE';

export interface GetMyInfoQueryReturn {
  email: string;
  nickname: string;
  vendor: Vendor;
  createdAt: Date;
}
export const getMyInfoQuery = async (): Promise<ApiResponse<GetMyInfoQueryReturn>> => {
  try {
    const data = await fetch(`${API_HOST}/auth/me`, {
      method: 'GET',
      ...(await getCommonFetchConfig())
    });
    return data.json();
  } catch (error) {
    return {
      result: undefined,
      error: {
        code: 'FETCH_ERROR'
      }
    };
  }
};
