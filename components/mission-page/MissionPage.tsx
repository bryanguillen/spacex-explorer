import React from "react";
import MissionImage from "./mission-image/MissionImage";
import MissionTextField, { MissionTextFieldProps } from "../shared/mission-text-field/MissionTextField";
import PageHeader from "../shared/page-header/PageHeader";

import './MissionPage.css';

interface MissionPageProps {
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
    <div className="mission-page">
      <PageHeader
        value={name}
      />
      <MissionImage
        imageUrl={imageUrl}
      />
      <h2 className="dark-mode-font-color mission-page-fields-section-header">{fieldsSectionHeader}</h2>
      <MissionTextField
        className="mission-page-text-field"
        name={date.name}
        value={date.value}
      />
      <MissionTextField
        className="mission-page-text-field"
        name={launchLocation.name}
        value={launchLocation.value}
      />
      <MissionTextField
        className="mission-page-text-field"
        name={rocket.name}
        value={rocket.value}
      />
      <MissionTextField
        className="mission-page-text-field"
        name={details.name}
        value={details.value}
      />
    </div>
  );
};

export default MissionPage;