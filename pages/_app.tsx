import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { AppProvider } from '../state/state';
import AppTemplate from '../components/app-template/AppTemplate';
import content from '../content/mock-cms.json';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const {
    homeButtonText,
    historyButtonText,
    upcomingButtonText
  } = content.global;

  return (
    <AppProvider>
      <AppTemplate
        homeButtonText={homeButtonText}
        historyButtonText={historyButtonText}
        isHomePage={router.pathname === '/'}
        upcomingButtonText={upcomingButtonText}
      >
        <Component {...pageProps} />
      </AppTemplate>
    </AppProvider>
  )
}

export default MyApp
