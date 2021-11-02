import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import apolloClient from '../config/apollo-client';
import Head from 'next/head';
import { MissionFeedCardProps } from '../components/history-page/mission-feed-card/MissionFeedCard';
import HistoryPage from '../components/history-page/HistoryPage';
import content from '../content/mock-cms.json';
import { getNumberOfVisibleMissions, parsePreviousMissions } from '../components/history-page/history-page-utils';
import { useApp, useAppDispatch } from '../state';

const History: NextPage<{
  missions: MissionFeedCardProps[],
  pageHeader: string
}> = ({
  missions,
  pageHeader
}) => {
  const state = useApp();
  const { history: { numberOfVisibleMissions } } = state;
  const dispatch = useAppDispatch();

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
            type: 'INCREASE_VISIBLE_MISSIONS',
            payload: newNumberOfMissionsVisible
          });
        }}
        missions={missions.slice(0, numberOfVisibleMissions - 1)}
        pageHeader={pageHeader}
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

  return {
    props: {
      pageHeader: header,
      missions: parsePreviousMissions(data.launchesPast, detailsFieldText, dateFieldText, readMoreText)
    }
  };
};


export default History;