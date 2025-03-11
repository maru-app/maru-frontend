import { cookies, headers } from 'next/headers';

export const getClientIpHeaders = async () => {
  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : headersList.get('x-real-ip');

  const clientIpHeader: Record<string, string> = {};
  if (clientIp) {
    clientIpHeader['X-Forwarded-For'] = clientIp;
  }

  return clientIpHeader;
};

export const getCommonFetchConfig = async (headerOption?: Record<string, string>): Promise<RequestInit> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('_maruToken')?.value;

  if (accessToken === undefined) {
    return {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(await getClientIpHeaders()),
        ...headerOption
      }
    };
  }

  return {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `_maruToken=${accessToken}`,
      ...(await getClientIpHeaders()),
      ...headerOption
    }
  };
};
