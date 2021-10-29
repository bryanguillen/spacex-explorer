import React from "react";
import MissionFeedCard, { MissionFeedCardProps } from "./mission-feed-card/MissionFeedCard";
import PageHeader from "../shared/page-header/PageHeader";

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
      {missions.map((mission: MissionFeedCardProps) => {
        const { missionDate, missionDetails, missionName, missionId } = mission;
        return (
          <MissionFeedCard
            className="history-page-feed-card"
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