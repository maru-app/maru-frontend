'use server';

import { API_HOST } from '@/api';
import { getCommonFetchConfig } from '@/api/config';

interface CreateDiaryParams {
  readonly title: string;
  readonly content: string;
}

export const createDiary = async ({ title, content }: CreateDiaryParams): Promise<void> => {
  await fetch(`${API_HOST}/diary`, {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    ...(await getCommonFetchConfig())
  });
};

export const deleteDiary = async (diaryId: number): Promise<void> => {
  await fetch(`${API_HOST}/diary/${diaryId}`, {
    method: 'DELETE',
    ...(await getCommonFetchConfig())
  });
};
