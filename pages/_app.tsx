import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppTemplate from '../app-template/AppTemplate';
import content from '../content/mock-cms.json';

function MyApp({ Component, pageProps }: AppProps) {
  const {
    homeButtonText,
    historyButtonText,
    upcomingButtonText
  } = content.global;

  return (
    <AppTemplate
      homeButtonText={homeButtonText}
      historyButtonText={historyButtonText}
      isHomePage={true}
      upcomingButtonText={upcomingButtonText}
    >
      <Component {...pageProps} />
    </AppTemplate>
  )
}

export default MyApp
