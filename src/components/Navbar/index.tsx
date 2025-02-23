'use client';

import { FC, useMemo, useState } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PAGE_ROUTES } from '@/constants/route';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { cn } from '@/utils/cn';
import { Tooltip } from 'react-tooltip';

interface NavbarProps {
  readonly authorize?: boolean;
}

const Navbar: FC<NavbarProps> = ({ authorize }) => {
  const pathname = usePathname();
  const notAuthorizeRoute = useMemo(() => PAGE_ROUTES.filter((route) => !route.isAuthorized), []);
  const authorizeRoute = useMemo(() => PAGE_ROUTES.filter((route) => route.isAuthorized), []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownStyle = isDropdownOpen ? 'block' : 'hidden';

  return (
    <>
      <header className="fixed w-full border-b bg-white/50 backdrop-blur">
        <Container className="flex items-center justify-between py-3">
          <div className="flex">
            <Link className="mr-16 select-none font-hahmlet text-2xl font-bold lg:text-[26px]" href="/">
              마루
            </Link>
            <div className="hidden space-x-6 lg:flex">
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
            className="hidden bg-emerald-500 text-sm font-bold text-white hover:bg-emerald-600 lg:block"
            as={Link}
            href={authorize ? '/write' : '/login'}
          >
            {authorize ? '일기쓰기' : '로그인'}
          </Button>
          <Button variance="text" className="block lg:hidden" onClick={() => setIsDropdownOpen((prev) => !prev)}>
            <Bars3Icon className="size-6" />
          </Button>
        </Container>

        <section className={cn('hidden w-full border-t p-4 lg:hidden', dropdownStyle)}>
          <div className="space-y-2">
            {notAuthorizeRoute.map((route) => (
              <Button
                key={route.href}
                className="w-full text-left"
                variance="text"
                active={pathname === route.href}
                as={Link}
                href={route.href}
                onClick={() => setIsDropdownOpen(false)}
              >
                {route.name}
              </Button>
            ))}
            {authorize &&
              authorizeRoute.map((route) => (
                <Button
                  key={route.href}
                  className="w-full text-left"
                  variance="text"
                  active={pathname === route.href}
                  as={Link}
                  href={route.href}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {route.name}
                </Button>
              ))}
          </div>
        </section>
      </header>

      <Tooltip id="tooltip" disableStyleInjection="core" />
    </>
  );
};

export default Navbar;
