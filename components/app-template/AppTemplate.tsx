import React, { FC } from "react";
import Navigation, { NavigationProps } from '../shared/navigation/Navigation';

import styles from './AppTemplate.module.css';

interface AppTemplateProps extends NavigationProps {
  isHomePage: boolean
}

const AppTemplate: FC<AppTemplateProps> = ({
  children,
  historyButtonText,
  homeButtonText,
  isHomePage
}) => {
  return (
    <div className={`${styles['base']} ${!isHomePage ? styles['navigation-enabled'] : styles['home-page']}`}>
      {
        !isHomePage ? 
          <div className={styles['navigation-container']}>
            <Navigation
              historyButtonText={historyButtonText}
              homeButtonText={homeButtonText}
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