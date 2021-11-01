import React from "react";
import MissionFeedCard, { MissionFeedCardProps } from "./mission-feed-card/MissionFeedCard";
import PageHeader from "../shared/page-header/PageHeader";

import styles from './HistoryPage.module.css';

interface HistoryPageProps {
  missions: MissionFeedCardProps[]
  pageHeader: string
}

const HistoryPage = ({
  missions,
  pageHeader
}: HistoryPageProps) => {
  return (
    <div className={styles.base}>
      <PageHeader
        className={styles.header}
        value={pageHeader}
      />
      {missions.map((mission: MissionFeedCardProps) => {
        const { missionDate, missionDetails, missionName, missionId } = mission;
        return (
          <MissionFeedCard
            className={styles.card}
            key={missionId}
            missionDate={missionDate}
            missionDetails={missionDetails}
            missionName={missionName}
            missionId={missionId}
            readMoreText="Read More"
          />
        );
      })}
    </div>
  );
};

export default HistoryPage;