import { FC } from 'react';

interface PageTitleProps {
  readonly title: string;
  readonly description: string;
}

const PageTitle: FC<PageTitleProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg font-bold">{description}</p>
    </div>
  );
};

export default PageTitle;
