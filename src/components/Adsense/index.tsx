import { FC } from 'react';
import Script from 'next/script';

const Adsense: FC = () => {
  if (process.env.NODE_ENV !== 'production') {
    return <></>;
  }

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2490453096003621"
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  );
};

export default Adsense;
