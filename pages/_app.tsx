import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { globalStyles } from '../stitches.config';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>훈데브 피드</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
