'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';
import { ApiResponse } from '@/api/type/common.type';

export type GetAllDiaryQueryReturn = {
  readonly content: Array<{
    readonly diaryId: number;
    readonly title: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
  }>;
  readonly page: {
    readonly size: number;
    readonly number: number;
    readonly totalElements: number;
    readonly totalPages: number;
  };
};
export const getAllDiary = async (size: number): Promise<ApiResponse<GetAllDiaryQueryReturn>> => {
  const data = await fetch(`${API_HOST}/diary?page=0&size=${size}`, {
    method: 'GET',
    ...(await getCommonFetchConfig())
  });
  return data.json();
};

export interface GetDiaryQueryReturn {
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
