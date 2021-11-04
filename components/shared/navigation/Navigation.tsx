import React from 'react';
import { IconContext } from 'react-icons';
import { MdHome, MdHistory } from 'react-icons/md';

import styles from './Navigation.module.css';

const iconsStyles = { className: 'dark-mode-font-color', size: '2rem' };

export interface NavigationProps {
  historyButtonText: string
  homeButtonText: string
}

interface NavigationTextProps {
  buttonText: string
}

const NavigationText = ({
  buttonText
}: NavigationTextProps) => {
  return (
    <span className={`${styles.text} dark-mode-font-color`}>{buttonText}</span>
  );
};

const Navigation = ({
  historyButtonText,
  homeButtonText
}: NavigationProps) => {
  return (
    <IconContext.Provider value={iconsStyles}>
      <div className={styles.navigation}>
        <div className={styles.button} role="button">
          <MdHome/>
          <NavigationText
            buttonText={homeButtonText}
          />
        </div>
        <div className={styles.button} role="button">
          <MdHistory/>
          <NavigationText
            buttonText={historyButtonText}
          />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navigation;