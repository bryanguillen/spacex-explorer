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
    <div className="app-template">
      <div className="app-template-content-container">
        <div className="app-template-navigation-footer-container">
          <Navigation
            historyButtonText={historyButtonText}
            homeButtonText={homeButtonText}
            upcomingButtonText={upcomingButtonText}
          />
          <div className="app-template-navigation-empty"></div>
        </div>
        <div className="app-template-route-content-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppTemplate;