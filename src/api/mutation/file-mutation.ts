'use server';

import { API_HOST, ApiResponse, createApiFetchError, interceptResponse } from '@/api';
import { getCommonFetchConfig } from '@/api/config';

export interface GeneratePutPresignedUrlMutationReturn {
  readonly url: string;
  readonly fileName: string;
}

export const generatePutPresignedUrlMutation = async (
  originalFileName: string
): Promise<ApiResponse<GeneratePutPresignedUrlMutationReturn>> => {
  try {
    const response = await fetch(`${API_HOST}/file/upload`, {
      method: 'POST',
      body: JSON.stringify({ originalFileName }),
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};

export interface GenerateGetPresignedUrlMutationReturn {
  readonly url: string;
  readonly fileName: string;
}

export const generateGetPresignedUrlMutation = async (
  fileName: string
): Promise<ApiResponse<GenerateGetPresignedUrlMutationReturn>> => {
  try {
    const response = await fetch(`${API_HOST}/file/download`, {
      method: 'POST',
      body: JSON.stringify({ fileName }),
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};
