import { FC, InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

const Input: FC<InputHTMLAttributes<unknown>> = ({ className, ...rest }) => {
  return (
    <input
      type="text"
      className={cn('w-full rounded-md border border-gray-300 bg-gray-50 p-2 lg:w-1/2', className)}
      {...rest}
    />
  );
};

export default Input;
