import React, { FC } from "react";
import Navigation, { NavigationProps } from '../shared/navigation/Navigation';

import styles from './AppTemplate.module.css';

interface AppTemplateProps extends NavigationProps {
  isHomePage: boolean
}

/**
 * @description Component used to wrap all other "page" components in the app
 * (e.g. History Page).  This provides reuse for the overall application skeleton
 * by allowing other pieces of contents (i.e. other pages) to be plugged in.
 * Without this, this would have to be imported into all other page components
 * that need the navigation and its positioning.
 */
const AppTemplate: FC<AppTemplateProps> = ({
  children,
  historyButtonText,
  homeButtonText,
  isHomePage,
  onClickHistory,
  onClickHome
}) => {
  return (
    <div className={`${styles['base']} ${!isHomePage ? styles['navigation-enabled'] : styles['home-page']}`}>
      {
        !isHomePage ? 
          <div className={styles['navigation-container']}>
            <Navigation
              historyButtonText={historyButtonText}
              homeButtonText={homeButtonText}
              onClickHistory={onClickHistory}
              onClickHome={onClickHome}
            />
            <div className={styles['navigation-empty']}></div>
          </div> :
          null
      }
      <div className={styles['route-content-container']}>
        {children}
      </div>
    </div>
  );
};

export default AppTemplate;