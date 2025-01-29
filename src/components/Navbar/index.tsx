'use client';

import { FC, useMemo } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PAGE_ROUTES } from '@/constants/route';

interface NavbarProps {
  readonly authorize?: boolean;
}

const Navbar: FC<NavbarProps> = ({ authorize }) => {
  const pathname = usePathname();
  const notAuthorizeRoute = useMemo(() => PAGE_ROUTES.filter((route) => !route.isAuthorized), []);
  const authorizeRoute = useMemo(() => PAGE_ROUTES.filter((route) => route.isAuthorized), []);

  return (
    <header className="fixed w-full border-b bg-white/50 py-3 backdrop-blur">
      <Container className="flex items-center justify-between">
        <div className="flex">
          <Link className="mr-16 select-none font-hahmlet text-[26px] font-bold" href="/">
            마루
          </Link>
          <div className="flex space-x-6">
            <div className="flex space-x-4">
              {notAuthorizeRoute.map((route) => (
                <Button key={route.href} variance="text" active={pathname === route.href} as={Link} href={route.href}>
                  {route.name}
                </Button>
              ))}
            </div>
            {authorize && (
              <>
                <div className="my-1 border-r" />
                <div className="flex space-x-4">
                  {authorizeRoute.map((route) => (
                    <Button
                      key={route.href}
                      variance="text"
                      active={pathname === route.href}
                      as={Link}
                      href={route.href}
                    >
                      {route.name}
                    </Button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <Button
          className="bg-emerald-500 text-sm font-bold text-white hover:bg-emerald-600"
          as={Link}
          href={authorize ? '/write' : '/login'}
        >
          {authorize ? '일기쓰기' : '로그인'}
        </Button>
      </Container>
    </header>
  );
};

export default Navbar;
