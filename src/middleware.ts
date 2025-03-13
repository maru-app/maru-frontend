import { NextRequest, NextResponse } from 'next/server';
import { getMyInfoQuery } from '@/api/query/auth-query';

export const config = {
  matcher: ['/diary/:path*', '/write/:path*', '/profile/:path*']
};

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/diary') ||
    request.nextUrl.pathname.startsWith('/write') ||
    request.nextUrl.pathname.startsWith('/profile')
  ) {
    const myInfo = await getMyInfoQuery();
    const isLogin = myInfo.result?.email !== undefined;
    if (!isLogin) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}
