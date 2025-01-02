import { cookies } from 'next/headers';

// eslint-disable-next-line no-undef
export const getCommonFetchConfig = async (): Promise<RequestInit> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('_maruToken')?.value;

  return {
    credentials: 'include',
    headers: {
      Cookie: `_maruToken=${accessToken}`
    }
  };
};
