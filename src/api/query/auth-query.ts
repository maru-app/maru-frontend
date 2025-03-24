'use server';

import { API_HOST, ApiResponse, createApiFetchError, interceptResponse } from '@/api';
import { getCommonFetchConfig } from '@/api/config';

type Vendor = 'GOOGLE' | 'NAVER' | 'APPLE';

export interface GetMyInfoQueryReturn {
  email: string;
  nickname: string;
  vendor: Vendor;
  isPublicRanking: boolean;
  createdAt: Date;
}

export const getMyInfoQuery = async (): Promise<ApiResponse<GetMyInfoQueryReturn>> => {
  try {
    const response = await fetch(`${API_HOST}/auth/me`, {
      method: 'GET',
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};
