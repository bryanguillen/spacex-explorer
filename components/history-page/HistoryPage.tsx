import React from "react";
import MissionFeedCard, { MissionFeedCardProps } from "../mission-feed-card/MissionFeedCard";
import PageHeader from "../page-header/PageHeader";

import './HistoryPage.css';

interface HistoryPageProps {
  missions: MissionFeedCardProps[]
  pageHeader: string
}

const HistoryPage = ({
  missions,
  pageHeader
}: HistoryPageProps) => {
  return (
    <div className="history-page">
      <PageHeader
        className="history-page-header"
        value={pageHeader}
      />
      {missions.map((mission: MissionFeedCardProps, index: number) => {
        const { missionDate, missionDetails, missionName } = mission;
        return (
          <MissionFeedCard
            className="history-page-feed-card"
            key={index}
            missionDate={missionDate}
            missionDetails={missionDetails}
            missionName={missionName}
            readMoreText="Read More"
          />
        );
      })}
    </div>
  );
};

export default HistoryPage;