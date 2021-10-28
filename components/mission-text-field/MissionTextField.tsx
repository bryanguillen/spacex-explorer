import React from 'react';

import './MissionTextField.css';

export interface MissionTextFieldProps {
  className?: string
  name: string
  value: string
}

const MissionTextField = ({
  name,
  value,
  className
}: MissionTextFieldProps) => {
  return (
    <div className={`mission-text-field ${className ? className : ''}`}>
      <span className="mission-text-field-name">{name}</span>: {value}
    </div>
  );
};

export default MissionTextField;