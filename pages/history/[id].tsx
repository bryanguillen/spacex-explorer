import { gql } from '@apollo/client';
import { GetStaticProps, GetStaticPaths } from 'next';
import type { NextPage } from 'next';
import apolloClient from '../../config/apollo-client';
import Head from 'next/head';
import getAllPastMissions from '../../lib/get-all-past-missions';
import { parsePastMission } from '../../components/mission-page/mission-page-utils';
import content from '../../content/mock-cms.json';
import MissionPage, { MissionPageProps } from '../../components/mission-page/MissionPage';

const PastMission: NextPage<
  {
    mission: MissionPageProps
  }
> = ({ mission }) => {
  return (
    <>
      <Head>
        <title>SpaceX Explorer | Past Mission</title>
        <meta name="description" content="Past SpaceX mission" />       
      </Head>
      <MissionPage
        name={mission.name}
        fieldsSectionHeader={mission.fieldsSectionHeader}
        date={mission.date}
        launchLocation={mission.launchLocation}
        rocket={mission.rocket}
        details={mission.details}
        imageUrl={mission.imageUrl}
      />
    </>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        launchesPast {
          id
        }
      }
    `
  });
  const paths = data.launchesPast.map((launch: { id: string }) => ({ params: { id: launch.id } }));

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const missions = await getAllPastMissions();
  const id = params?.id && typeof params.id === 'string' ? params.id : '0'; // @TODO clean this up
  const mission = parsePastMission(missions, id, content.mission);

  return {
    props: { message: 'hello world', mission }
  }
};

export default PastMission;