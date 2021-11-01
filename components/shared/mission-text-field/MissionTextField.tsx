import React from 'react';

import styles from './MissionTextField.module.css';

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
    <div className={`${styles.base} dark-mode-font-color ${className ? className : ''}`}>
      <span className={styles.name}>{name}</span>: {value}
    </div>
  );
};

export default MissionTextField;