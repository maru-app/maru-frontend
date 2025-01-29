import { FC, InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

const Input: FC<InputHTMLAttributes<unknown>> = ({ className, ...rest }) => {
  return <input type="text" className={cn('rounded-md border border-gray-300 bg-gray-50 p-2', className)} {...rest} />;
};

export default Input;
