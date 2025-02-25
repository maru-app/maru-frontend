'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';
import { ApiResponse } from '@/api/type/common.type';

export interface GeneratePutPresignedUrlReturn {
  readonly url: string;
  readonly fileName: string;
}
export const generatePutPresignedUrl = async (
  originalFileName: string
): Promise<ApiResponse<GeneratePutPresignedUrlReturn>> => {
  const data = await fetch(`${API_HOST}/file/upload`, {
    method: 'POST',
    body: JSON.stringify({ originalFileName }),
    ...(await getCommonFetchConfig())
  });
  return data.json();
};

export interface GenerateGetPresignedUrlReturn {
  readonly url: string;
  readonly fileName: string;
}
export const generateGetPresignedUrl = async (
  fileName: string
): Promise<ApiResponse<GenerateGetPresignedUrlReturn>> => {
  const data = await fetch(`${API_HOST}/file/download`, {
    method: 'POST',
    body: JSON.stringify({ fileName }),
    ...(await getCommonFetchConfig())
  });
  return data.json();
};
