import React from 'react';
import AppButton from '../../shared/app-button/AppButton';
import MissionTextField, { MissionTextFieldProps } from '../../shared/mission-text-field/MissionTextField';
import truncateDetails from './truncate-details';

import styles from './MissionFeedCard.module.css';

/**
 * @description Interface used for the actual schema of all the data
 * needed to represent a mission feed card; meaning, no event handlers
 * or JSX attributes, as this interface is used for transforming data
 * from the back end via utility functions that do not need nor care
 * for the JSX related attributes
 */
export interface MissionFeedCardPropsBase {
  missionName: string
  missionDate: MissionTextFieldProps
  missionDetails: MissionTextFieldProps
  readMoreText: string
  missionId: number
}

/**
 * @description Interface used for the actual component; it contains what the
 * interface above doesn't.
 */
export interface MissionFeedCardProps extends MissionFeedCardPropsBase {
  className?: string
  onClickReadMore: React.MouseEventHandler<HTMLButtonElement>
}

const MissionFeedCard = ({
  className,
  missionName,
  missionDate,
  missionDetails,
  readMoreText,
  onClickReadMore
}: MissionFeedCardProps) => {
  return (
    <div className={`${styles.base} ${className ? className : ''}`}>
      <div className={`${styles.field} ${styles.name} dark-mode-font-color`}>{missionName}</div>
      <MissionTextField className={styles.field} name={missionDate.name} value={missionDate.value}/>
      <MissionTextField className={styles.field} name={missionDetails.name} value={truncateDetails(missionDetails.value)}/>
      <div className={styles['button-container']}>
        <AppButton
          onClick={onClickReadMore}
          text={readMoreText}
          variant="primary"
        />
      </div>
    </div>
  )
};

export default MissionFeedCard;