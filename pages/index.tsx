import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import HomePage, { HomePageProps } from '../components/home-page/HomePage';
import content from '../content/mock-cms.json';

const Home: NextPage<HomePageProps> = ({
  welcomeButtonText,
  welcomeHeaderText
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>SpaceX Explorer | Home</title>
        <meta name="description" content="Explore SpaceX missions" />
      </Head>
      <HomePage
        onClickWelcomeButton={(event) => router.push('/history')}
        welcomeButtonText={welcomeButtonText}
        welcomeHeaderText={welcomeHeaderText}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps =  () => {
  const { welcomeButtonText, welcomeHeaderText } = content.home;

  return {
    props: {
      welcomeButtonText,
      welcomeHeaderText
    }
  };
};


export default Home;
