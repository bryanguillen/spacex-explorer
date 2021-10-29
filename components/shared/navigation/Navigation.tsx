import React from 'react';
import { IconContext } from 'react-icons';
import { MdHome, MdHistory, MdUpcoming } from 'react-icons/md';

import './Navigation.css';

const iconsStyles = { className: 'dark-mode-font-color', size: '2rem' };

export interface NavigationProps {
  historyButtonText: string
  homeButtonText: string
  upcomingButtonText: string
}

interface NavigationTextProps {
  buttonText: string
}

const NavigationText = ({
  buttonText
}: NavigationTextProps) => {
  return (
    <span className="navigation-text dark-mode-font-color">{buttonText}</span>
  );
};

const Navigation = ({
  historyButtonText,
  homeButtonText,
  upcomingButtonText
}: NavigationProps) => {
  return (
    <IconContext.Provider value={iconsStyles}>
      <div className="navigation">
        <div className="navigation-button" role="button">
          <MdHome/>
          <NavigationText
            buttonText={homeButtonText}
          />
        </div>
        <div className="navigation-button" role="button">
          <MdHistory/>
          <NavigationText
            buttonText={historyButtonText}
          />
        </div>
        <div className="navigation-button" role="button">
          <MdUpcoming/>
          <NavigationText
            buttonText={upcomingButtonText}
          />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navigation;