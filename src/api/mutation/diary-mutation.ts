'use server';

import { API_HOST, ApiResponse, createApiFetchError, interceptResponse } from '@/api';
import { getCommonFetchConfig } from '@/api/config';

export interface CreateDiaryMutationParams {
  readonly title: string;
  readonly content: string;
  readonly emoji: string;
}

export const createDiaryMutation = async ({
  title,
  content,
  emoji
}: CreateDiaryMutationParams): Promise<ApiResponse<void>> => {
  try {
    const response = await fetch(`${API_HOST}/diary`, {
      method: 'POST',
      body: JSON.stringify({ title, content, emoji }),
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};

export interface UpdateDiaryMutationParams {
  readonly title: string;
  readonly content: string;
  readonly emoji: string;
}

export const updateDiaryMutation = async (
  diaryId: number,
  { title, content, emoji }: UpdateDiaryMutationParams
): Promise<ApiResponse<void>> => {
  try {
    const response = await fetch(`${API_HOST}/diary/${diaryId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content, emoji }),
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};

export const deleteDiaryMutation = async (diaryId: number): Promise<ApiResponse<void>> => {
  try {
    const response = await fetch(`${API_HOST}/diary/${diaryId}`, {
      method: 'DELETE',
      ...(await getCommonFetchConfig())
    });
    return interceptResponse(response);
  } catch (error) {
    return createApiFetchError();
  }
};
