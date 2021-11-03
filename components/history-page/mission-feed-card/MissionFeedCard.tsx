import React from 'react';
import AppButton from '../../shared/app-button/AppButton';
import MissionTextField, { MissionTextFieldProps } from '../../shared/mission-text-field/MissionTextField';
import truncateDetails from './truncate-details';

import styles from './MissionFeedCard.module.css';

export interface MissionFeedCardProps {
  className?: string
  missionName: string
  missionDate: MissionTextFieldProps
  missionDetails: MissionTextFieldProps
  readMoreText: string
  missionId: number
}

const MissionFeedCard = ({
  className,
  missionName,
  missionDate,
  missionDetails,
  readMoreText
}: MissionFeedCardProps) => {
  return (
    <div className={`${styles.base} ${className ? className : ''}`}>
      <div className={`${styles.field} ${styles.name} dark-mode-font-color`}>{missionName}</div>
      <MissionTextField className={styles.field} name={missionDate.name} value={missionDate.value}/>
      <MissionTextField className={styles.field} name={missionDetails.name} value={truncateDetails(missionDetails.value)}/>
      <div className={styles['button-container']}>
        <AppButton
          text={readMoreText}
          variant="primary"
        />
      </div>
    </div>
  )
};

export default MissionFeedCard;