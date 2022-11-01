import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../globalStyles';
import { theme } from '../theme';

import { NotifyProvider } from '../context/NotifyContext';
import { UserProvider } from "../context/UserContext";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <NotifyProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </NotifyProvider>
    </ThemeProvider>
  </>
}

export default MyApp
