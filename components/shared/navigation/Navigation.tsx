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

const NavigationFooterText = ({
  buttonText
}: NavigationTextProps) => {
  return (
    <span className="navigation-footer-text dark-mode-font-color">{buttonText}</span>
  );
};

const NavigationFooter = ({
  historyButtonText,
  homeButtonText,
  upcomingButtonText
}: NavigationProps) => {
  return (
    <IconContext.Provider value={iconsStyles}>
      <div className="navigation-footer">
        <div className="navigation-footer-button" role="button">
          <MdHome/>
          <NavigationFooterText
            buttonText={homeButtonText}
          />
        </div>
        <div className="navigation-footer-button" role="button">
          <MdHistory/>
          <NavigationFooterText
            buttonText={historyButtonText}
          />
        </div>
        <div className="navigation-footer-button" role="button">
          <MdUpcoming/>
          <NavigationFooterText
            buttonText={upcomingButtonText}
          />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export {
  NavigationFooter
};