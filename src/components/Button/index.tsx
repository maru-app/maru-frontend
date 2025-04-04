import { ButtonHTMLAttributes, ComponentPropsWithoutRef, ComponentType, ElementType, PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variance?: 'primary' | 'text';
  readonly active?: boolean;
}

type ButtonProps<E extends ElementType | ComponentType = 'button'> = BaseButtonProps & {
  readonly as?: E;
} & Omit<ComponentPropsWithoutRef<E>, keyof BaseButtonProps>;

const Button = <C extends ElementType = 'button'>({
  variance = 'primary',
  active,
  children,
  className,
  as,
  ...props
}: PropsWithChildren<ButtonProps<C>>) => {
  const Tag = as || 'button';
  const styleMap = {
    primary: 'bg-gray-100 hover:bg-gray-200',
    text: 'bg-transparent text-black hover:bg-gray-200'
  };
  const activeStyleMap = {
    primary: 'bg-gray-200',
    text: 'bg-gray-200'
  };

  return (
    <Tag
      type="button"
      className={cn(
        'block cursor-pointer rounded-md px-3.5 py-2 text-black',
        active ? activeStyleMap[variance] : styleMap[variance],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
