import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import apolloClient from '../../config/apollo-client';
import Head from 'next/head';
import { MissionFeedCardPropsBase } from '../../components/history-page/mission-feed-card/MissionFeedCard';
import HistoryPage from '../../components/history-page/HistoryPage';
import content from '../../content/mock-cms.json';
import { getNumberOfVisibleMissions, parsePreviousMissions } from '../../components/history-page/history-page-utils';
import { useApp, useAppDispatch, Actions } from '../../state';

const History: NextPage<{
  missions: MissionFeedCardPropsBase[],
  pageHeader: string
}> = ({
  missions,
  pageHeader
}) => {
  const state = useApp();
  const { history: { numberOfVisibleMissions } } = state;
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>SpaceX Explorer | Past Missions</title>
        <meta name="description" content="Past SpaceX missions" />
      </Head>
      <HistoryPage
        allMissionsVisible={numberOfVisibleMissions === missions.length}
        getMoreMissions={() => {
          const newNumberOfMissionsVisible = getNumberOfVisibleMissions(numberOfVisibleMissions, missions.length);
          dispatch({
            type: Actions.INCREASE_VISIBLE_MISSIONS,
            payload: newNumberOfMissionsVisible
          });
        }}
        missions={missions.slice(0, numberOfVisibleMissions)}
        pageHeader={pageHeader}
        onClick={(id: number) => router.push(`/history/${id}`)}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    header,
    detailsFieldText,
    dateFieldText,
    readMoreText
  } = content.history;

  let launches;

  try {
    const { data } = await apolloClient.query({
      query: gql`
        query {
          launchesPast {
            id
            launch_date_unix
            details
            mission_name
          }
        }
      `
    });
    launches = data.launchesPast;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      pageHeader: header,
      missions: parsePreviousMissions(launches, detailsFieldText, dateFieldText, readMoreText)
    }
  };
};


export default History;