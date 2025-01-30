import { cookies } from 'next/headers';

// eslint-disable-next-line no-undef
export const getCommonFetchConfig = async (headerOption?: Record<string, string>): Promise<RequestInit> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('_maruToken')?.value;

  if (accessToken === undefined) {
    return {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...headerOption
      }
    };
  }

  return {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `_maruToken=${accessToken}`,
      ...headerOption
    }
  };
};
