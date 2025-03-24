'use server';

import { API_HOST, ApiResponse, createApiFetchError, interceptResponse } from '@/api';
import { getCommonFetchConfig } from '@/api/config';

export type GetAllStreakQueryReturn = Array<{
  readonly userId: string;
  readonly date: string;
  readonly bestStreak: number;
  readonly count: number;
}>;

export const getAllStreakQuery = async (year: number): Promise<ApiResponse<GetAllStreakQueryReturn>> => {
  try {
    const response = await fetch(`${API_HOST}/streak?year=${year}`, {
      method: 'GET',
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};

export interface GetStreakQueryReturn {
  readonly streak: number;
  readonly bestStreak: number;
}

export const getStreakQuery = async (date: string): Promise<ApiResponse<GetStreakQueryReturn>> => {
  try {
    const response = await fetch(`${API_HOST}/streak/best?date=${date}`, {
      method: 'GET',
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};

export interface GetStreakRankingQueryReturn {
  readonly content: Array<{
    readonly rank: number;
    readonly isPublicRanking: boolean;
    readonly nickname: string;
    readonly streak: number;
    readonly bestStreak: number;
  }>;
  readonly page: {
    readonly size: number;
    readonly number: number;
    readonly totalElements: number;
    readonly totalPages: number;
  };
}

export const getStreakRankingQuery = async (
  year: number,
  size: number
): Promise<ApiResponse<GetStreakRankingQueryReturn>> => {
  try {
    const response = await fetch(`${API_HOST}/streak/rank?year=${year}&page=0&size=${size}`, {
      method: 'GET',
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};
