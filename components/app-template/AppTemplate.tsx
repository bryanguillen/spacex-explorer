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
  isHomePage,
  upcomingButtonText
}) => {
  return (
    <div className={`${isHomePage ? styles['home-page'] : ''}`}>
      <div className={`${styles['content-container']} ${!isHomePage ? styles['navigation-enabled'] : ''}`}>
        {
          !isHomePage ? 
            <div className={styles['navigation-container']}>
              <Navigation
                historyButtonText={historyButtonText}
                homeButtonText={homeButtonText}
                upcomingButtonText={upcomingButtonText}
              />
              <div className={styles['navigation-empty']}></div>
            </div> :
            null
        }
        <div className={styles['route-content-container']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppTemplate;