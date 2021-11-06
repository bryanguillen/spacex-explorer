import React from 'react';
import AppButton from '../../shared/app-button/AppButton';
import MissionTextField, { MissionTextFieldProps } from '../../shared/mission-text-field/MissionTextField';
import truncateDetails from './truncate-details';

import styles from './MissionFeedCard.module.css';

/**
 * @description Interface used for the actual schema of the data consumed by
 * a mission feed card, EXCLUDING JSX related props, like onClick or className.
 * This is basically the result of transforming data from the back end, at which
 * point, JSX related props are not needed.  See usage in utilities and
 * in HistoryPage for examples of why this is used.
 */
export interface MissionFeedCardPropsBase {
  missionName: string
  missionDate: MissionTextFieldProps
  missionDetails: MissionTextFieldProps
  readMoreText: string
  missionId: number // used for testing
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
  missionId,
  readMoreText,
  onClickReadMore
}: MissionFeedCardProps) => {
  return (
    <div id={`mission-${missionId}`} className={`mission-feed-card ${styles.base} ${className ? className : ''}`}>
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