import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import apolloClient from '../config/apollo-client';
import Head from 'next/head';
import HistoryPage, { HistoryPageProps } from '../components/history-page/HistoryPage';
import content from '../content/mock-cms.json';
import { parsePreviousMissions } from '../components/history-page/history-page-utils';
import { useApp } from '../state/state';

const History: NextPage<HistoryPageProps> = ({
  missions,
  pageHeader
}) => {
  const { history } = useApp();

  return (
    <>
      <Head>
        <title>SpaceX Explorer | Past Missions</title>
        <meta name="description" content="Past SpaceX missions" />
      </Head>
      <HistoryPage
        missions={missions.slice(0, history.numberOfVisibleMissions)}
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