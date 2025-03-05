'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';

export interface CreateDiaryMutationParams {
  readonly title: string;
  readonly content: string;
}
export const createDiaryMutation = async ({ title, content }: CreateDiaryMutationParams): Promise<void> => {
  await fetch(`${API_HOST}/diary`, {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    ...(await getCommonFetchConfig())
  });
};

export interface UpdateDiaryMutationParams {
  readonly title: string;
  readonly content: string;
}
export const updateDiaryMutation = async (
  diaryId: number,
  { title, content }: UpdateDiaryMutationParams
): Promise<void> => {
  await fetch(`${API_HOST}/diary/${diaryId}`, {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
    ...(await getCommonFetchConfig())
  });
};

export const deleteDiaryMutation = async (diaryId: number): Promise<void> => {
  await fetch(`${API_HOST}/diary/${diaryId}`, {
    method: 'DELETE',
    ...(await getCommonFetchConfig())
  });
};
