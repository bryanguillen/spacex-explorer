import React, { useEffect, useRef } from "react";
import MissionFeedCard, { MissionFeedCardPropsBase } from "./mission-feed-card/MissionFeedCard";
import PageHeader from "../shared/page-header/PageHeader";

import styles from './HistoryPage.module.css';

interface HistoryPageProps {
  allMissionsVisible: boolean
  getMoreMissions(): void
  missions: MissionFeedCardPropsBase[]
  pageHeader: string
  onClick(id: number): void 
}

const HistoryPage = ({
  allMissionsVisible,
  getMoreMissions,
  missions,
  pageHeader,
  onClick
}: HistoryPageProps) => {
  const observedDiv = useRef<HTMLDivElement>(null);

  /**
   * @description Used to setup the code that handles the observed div
   */
  useEffect(() => {
    const observerCallBack = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        getMoreMissions();
      }
    };
    const observer = new IntersectionObserver(observerCallBack);
    if (observedDiv.current) observer.observe(observedDiv.current);

    return () => {
      if (observedDiv.current) observer.unobserve(observedDiv.current);
    };
  }, [observedDiv, getMoreMissions]);

  return (
    <div className={styles.base}>
      <PageHeader
        className={styles.header}
        value={pageHeader}
      />
      {missions.map((mission: MissionFeedCardPropsBase) => {
        const { readMoreText, missionDate, missionDetails, missionName, missionId } = mission;
        return (
          <MissionFeedCard
            className={styles.card}
            key={missionId}
            missionDate={missionDate}
            missionDetails={missionDetails}
            missionName={missionName}
            missionId={missionId}
            readMoreText={readMoreText}
            onClickReadMore={(event) => onClick(missionId)}
          />
        );
      })}
      {!allMissionsVisible ? <div className={styles.observed} ref={observedDiv}></div> : null}
    </div>
  );
};

export default HistoryPage;