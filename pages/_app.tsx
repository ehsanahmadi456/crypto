import '@/styles/globals.css';
import theme from '@/mui/theme';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <div className='text-white'>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
}
