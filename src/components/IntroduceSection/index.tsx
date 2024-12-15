import { FC, HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import Container from '@/components/Container';
import { cn } from '@/utils/cn';

interface IntroduceSectionProps {
  readonly titleContent: ReactElement;
  readonly description: string;
}

const IntroduceSection: FC<PropsWithChildren<HTMLAttributes<unknown> & IntroduceSectionProps>> = ({
  children,
  titleContent,
  description,
  className,
  ...props
}) => {
  return (
    <div className={cn('text-center', className)} {...props}>
      <Container className="space-y-10">
        {titleContent}
        <p className="mt-6 text-xl font-bold">{description}</p>
        {children}
      </Container>
    </div>
  );
};

export default IntroduceSection;
