import React from 'react';

import './MissionTextField.css';

interface MissionTextFieldProps {
  name: string;
  value: string;
}

const MissionTextField = ({
  name,
  value
}: MissionTextFieldProps) => {
  return (
    <div className="mission-text-field">
      <span className="mission-text-field-name">{name}</span>: {value}
    </div>
  );
};

export default MissionTextField;