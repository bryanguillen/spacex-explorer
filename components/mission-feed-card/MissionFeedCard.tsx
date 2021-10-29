import React from 'react';
import AppButton from '../app-button/AppButton';
import MissionTextField, { MissionTextFieldProps } from '../mission-text-field/MissionTextField';

import './MissionFeedCard.css';

export interface MissionFeedCardProps {
  className?: string
  missionName: string
  missionDate: MissionTextFieldProps
  missionDetails: MissionTextFieldProps
  readMoreText: string
}

const MissionFeedCard = ({
  className,
  missionName,
  missionDate,
  missionDetails,
  readMoreText
}: MissionFeedCardProps) => {
  return (
    <div className={`mission-feed-card ${className ? className : ''}`}>
      <div className="mission-feed-card-field mission-feed-card-name dark-mode-font-color">{missionName}</div>
      <MissionTextField className="mission-feed-card-field" name={missionDate.name} value={missionDate.value}/>
      <MissionTextField className="mission-feed-card-field" name={missionDetails.name} value={missionDetails.value}/>
      <div className="mission-feed-card-button-container">
        <AppButton
          text={readMoreText}
          variant="primary"
        />
      </div>
    </div>
  )
};

export default MissionFeedCard;