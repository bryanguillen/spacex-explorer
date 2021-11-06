import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { AppProvider } from '../state';
import AppTemplate from '../components/app-template/AppTemplate';
import content from '../content/mock-cms.json';

/**
 * @description App component that wraps whatever component is mounted
 * with app provider (to provide state) and app template (to provide
 * layout support)
 */
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const {
    homeButtonText,
    historyButtonText
  } = content.global;

  return (
    <AppProvider>
      <AppTemplate
        homeButtonText={homeButtonText}
        historyButtonText={historyButtonText}
        isHomePage={router.pathname === '/'}
        onClickHistory={(event) => router.push('/history')}
        onClickHome={(event) => router.push('/')}
      >
        <Component {...pageProps} />
      </AppTemplate>
    </AppProvider>
  );
}

export default MyApp;
