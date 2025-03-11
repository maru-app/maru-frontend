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

  const headers = new Headers(request.headers);
  const forwardedFor = request.headers.get('X-Forwarded-For');
  const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : request.headers.get('X-Real-IP') || null;
  if (clientIp) {
    headers.set('X-Forwarded-For', clientIp);
  }

  return NextResponse.next({
    request: {
      headers
    }
  });
}
