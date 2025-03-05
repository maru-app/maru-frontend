'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';
import { ApiResponse } from '@/api/type/common.type';

export type GetAllStreakQueryReturn = Array<{
  readonly userId: string;
  readonly date: string;
  readonly bestStreak: number;
  readonly count: number;
}>;
export const getAllStreakQuery = async (year: number): Promise<ApiResponse<GetAllStreakQueryReturn>> => {
  const data = await fetch(`${API_HOST}/streak?year=${year}`, {
    method: 'GET',
    ...(await getCommonFetchConfig())
  });
  return data.json();
};

export interface GetStreakQueryReturn {
  readonly streak: number;
  readonly bestStreak: number;
}
export const getStreakQuery = async (date: string): Promise<ApiResponse<GetStreakQueryReturn>> => {
  const data = await fetch(`${API_HOST}/streak/best?date=${date}`, {
    method: 'GET',
    ...(await getCommonFetchConfig())
  });
  return data.json();
};
