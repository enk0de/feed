import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { globalStyles } from '../stitches.config';
import '../styles/index.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  globalStyles();

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>hoondevfeed</title>
        <meta name="description" content="Stories of Frontend Engineering" />
        <meta name="author" content="Lim Ji Hoon" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="hoondevfeed" />
        <meta property="og:description" content="Stories of Frontend Engineering" />
        {/* <meta property="og:image" content={OgImage.src} /> */}
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
