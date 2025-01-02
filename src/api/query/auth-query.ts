import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';
import { ApiResponse } from '@/api/type/common.type';

interface GetMyInfoQueryReturn {
  email: string;
  nickname: string;
  vendor: string;
  createdAt: Date;
}

export const getMyInfoQuery = async (): Promise<ApiResponse<GetMyInfoQueryReturn>> => {
  const data = await fetch(`${API_HOST}/auth/me`, {
    method: 'GET',
    ...(await getCommonFetchConfig())
  });
  return data.json();
};
