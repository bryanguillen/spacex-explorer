import React from "react";
import MissionImage from "./mission-image/MissionImage";
import MissionTextField, { MissionTextFieldProps } from "../shared/mission-text-field/MissionTextField";
import PageHeader from "../shared/page-header/PageHeader";

import styles from './MissionPage.module.css';

export interface MissionPageProps {
  name: string
  fieldsSectionHeader: string
  date: MissionTextFieldProps
  launchLocation: MissionTextFieldProps
  rocket: MissionTextFieldProps
  details: MissionTextFieldProps
  imageUrl: string
}

const MissionPage = ({
  name,
  fieldsSectionHeader,
  date,
  launchLocation,
  rocket,
  details,
  imageUrl
}: MissionPageProps) => {
  return (
    <div className={styles.base}>
      <PageHeader
        value={name}
      />
      <MissionImage
        imageUrl={imageUrl}
      />
      <h2 className={`dark-mode-font-color ${styles['fields-header']}`}>{fieldsSectionHeader}</h2>
      <MissionTextField
        className={styles.field}
        name={date.name}
        value={date.value}
      />
      <MissionTextField
        className={styles.field}
        name={launchLocation.name}
        value={launchLocation.value}
      />
      <MissionTextField
        className={styles.field}
        name={rocket.name}
        value={rocket.value}
      />
      <MissionTextField
        className={styles.field}
        name={details.name}
        value={details.value}
      />
    </div>
  );
};

export default MissionPage;