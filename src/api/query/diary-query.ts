'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';
import { ApiResponse } from '@/api/type/common.type';

interface GetAllDiaryQueryReturn {
  readonly diaryId: number;
  readonly title: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export const getAllDiary = async (): Promise<ApiResponse<GetAllDiaryQueryReturn[]>> => {
  const data = await fetch(`${API_HOST}/diary`, {
    method: 'GET',
    ...(await getCommonFetchConfig())
  });
  return data.json();
};

interface GetDiaryQueryReturn {
  readonly diaryId: number;
  readonly title: string;
  readonly content: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
export const getDiary = async (id: number): Promise<ApiResponse<GetDiaryQueryReturn>> => {
  const data = await fetch(`${API_HOST}/diary/${id}`, {
    method: 'GET',
    ...(await getCommonFetchConfig())
  });
  return data.json();
};
