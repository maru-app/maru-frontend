'use server';

import { API_HOST, ApiResponse, createApiFetchError, interceptResponse } from '@/api';
import { getCommonFetchConfig } from '@/api/config';

export interface GetAllDiaryQueryReturn {
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
}

export const getAllDiaryQuery = async (size: number): Promise<ApiResponse<GetAllDiaryQueryReturn>> => {
  try {
    const response = await fetch(`${API_HOST}/diary?page=0&size=${size}`, {
      method: 'GET',
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};

export interface GetDiaryQueryReturn {
  readonly diaryId: number;
  readonly title: string;
  readonly content: string;
  readonly emoji: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export const getDiaryQuery = async (id: number): Promise<ApiResponse<GetDiaryQueryReturn>> => {
  try {
    const data = await fetch(`${API_HOST}/diary/${id}`, {
      method: 'GET',
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(data);
  } catch (error) {
    return createApiFetchError();
  }
};
