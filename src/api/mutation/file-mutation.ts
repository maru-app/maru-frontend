'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';
import { ApiResponse } from '@/api/type/common.type';
import { CreateDiaryMutationParams } from '@/api/mutation/diary-mutation';

export interface GeneratePutPresignedUrlMutationReturn {
  readonly url: string;
  readonly fileName: string;
}
export const generatePutPresignedUrlMutation = async (
  originalFileName: string
): Promise<ApiResponse<GeneratePutPresignedUrlMutationReturn>> => {
  const data = await fetch(`${API_HOST}/file/upload`, {
    method: 'POST',
    body: JSON.stringify({ originalFileName }),
    ...(await getCommonFetchConfig())
  });
  return data.json();
};

export interface GenerateGetPresignedUrlMutationReturn {
  readonly url: string;
  readonly fileName: string;
}
export const generateGetPresignedUrlMutation = async (
  fileName: string
): Promise<ApiResponse<GenerateGetPresignedUrlMutationReturn>> => {
  const data = await fetch(`${API_HOST}/file/download`, {
    method: 'POST',
    body: JSON.stringify({ fileName }),
    ...(await getCommonFetchConfig())
  });
  return data.json();
};
