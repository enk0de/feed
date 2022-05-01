import type { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import * as gtag from '../lib/gtag';
import SEO from '../next-seo.config';
import { globalStyles } from '../stitches.config';
import '../styles/index.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  globalStyles();

  return (
    <>
      <DefaultSeo {...SEO} />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
