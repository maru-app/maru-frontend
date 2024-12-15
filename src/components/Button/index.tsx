import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps {
  readonly variance?: 'primary' | 'text';
  readonly active?: boolean;
}

const Button: FC<PropsWithChildren<ButtonHTMLAttributes<unknown> & ButtonProps>> = ({
  variance = 'primary',
  active,
  children,
  className,
  ...props
}) => {
  const styleMap = {
    primary: '',
    text: 'bg-transparent text-black hover:bg-gray-200'
  };

  const activeStyleMap = {
    primary: '',
    text: 'bg-gray-200'
  };

  return (
    <button
      type="button"
      className={cn(
        'cursor-pointer rounded-md px-3 py-2 text-black',
        active ? activeStyleMap[variance] : styleMap[variance],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
