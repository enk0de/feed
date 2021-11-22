import '@splidejs/splide/dist/css/splide.min.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { globalStyles } from '../stitches.config';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
