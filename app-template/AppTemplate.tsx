import React, { FC } from "react";
import Navigation, { NavigationProps } from '../components/shared/navigation/Navigation';

import './AppTemplate.css';

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
    <div className={`app-template ${isHomePage ? 'app-template-home-page' : ''}`}>
      <div className="app-template-content-container">
        {
          !isHomePage ? 
            <div className="app-template-navigation-container">
              <Navigation
                historyButtonText={historyButtonText}
                homeButtonText={homeButtonText}
                upcomingButtonText={upcomingButtonText}
              />
              <div className="app-template-navigation-empty"></div>
            </div> :
            null
        }
        <div className="app-template-route-content-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppTemplate;