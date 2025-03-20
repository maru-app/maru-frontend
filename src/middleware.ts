import { NextRequest, NextResponse } from 'next/server';
import { getMyInfoQuery } from '@/api/query/auth-query';

export const config = {
  matcher: ['/:path*']
};

export async function middleware(request: NextRequest) {
  const myInfo = await getMyInfoQuery();
  const isAuthorize = myInfo.result?.email !== undefined;

  if (
    request.nextUrl.pathname.startsWith('/diary') ||
    request.nextUrl.pathname.startsWith('/write') ||
    request.nextUrl.pathname.startsWith('/profile')
  ) {
    if (!isAuthorize) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  const nextResponse = NextResponse.next();
  nextResponse.headers.set('x-maru-authorize', String(isAuthorize));

  return nextResponse;
}
