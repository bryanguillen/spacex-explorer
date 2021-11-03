import React from 'react';

import styles from './MissionTextField.module.css';

export interface MissionTextFieldProps {
  className?: string
  name: string
  value: string
}

/**
 * @description Component for a text field (i.e. FIELD_NAME: FIELD_VALUE);
 * example: Details: This was our first...  Notice that null is returned if the
 * value is falsy.  This is a hack used so that the component only renders when there
 * is content (i.e. a value).  The reason for this is that it is unclear what can be
 * returned as empty and not empty within the SpaceX API.  In other words, it seems like
 * a field like details can be empty, whereas mission name cannot.
 */
const MissionTextField = ({
  name,
  value,
  className
}: MissionTextFieldProps) => {
  return (
    value ? 
      <div className={`${styles.base} dark-mode-font-color ${className ? className : ''}`}>
        <span className={styles.name}>{name}</span>: {value}
      </div> :
      null
  );
};

export default MissionTextField;