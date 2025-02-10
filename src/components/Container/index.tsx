import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

const Container: FC<PropsWithChildren<HTMLAttributes<unknown>>> = ({ children, className }) => {
  return <div className={cn('mx-auto max-w-screen-lg px-6 lg:px-0 xl:max-w-screen-xl', className)}>{children}</div>;
};

export default Container;
