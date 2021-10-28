import React from 'react';
import { IconContext } from 'react-icons';
import { MdHome, MdHistory, MdUpcoming } from 'react-icons/md';

import './Navigation.css';

interface NavigationProps {
  historyButtonText: string
  homeButtonText: string
  upcomingButtonText: string
}

const NavigationFooter = ({
  historyButtonText,
  homeButtonText,
  upcomingButtonText
}: NavigationProps) => {
  return (
    <IconContext.Provider value={{ color: '#C9D1D9', size: '2rem' }}>
      <div className="navigation-footer">
        <div className="navigation-footer-button navigation-footer-button-home" role="button">
          <MdHome/>
          <NavigationFooterText
            buttonText={homeButtonText}
          />
        </div>
        <div className="navigation-footer-button navigation-footer-button-create" role="button">
          <MdHistory/>
          <NavigationFooterText
            buttonText={historyButtonText}
          />
        </div>
        <div className="navigation-footer-button navigation-footer-button-search" role="button">
          <MdUpcoming/>
          <NavigationFooterText
            buttonText={upcomingButtonText}
          />
        </div>
      </div>
    </IconContext.Provider>
  );
};

interface NavigationTextProps {
  buttonText: string
}

const NavigationFooterText = ({
  buttonText
}: NavigationTextProps) => {
  return (
    <span className="navigation-footer-text">{buttonText}</span>
  );
}

export {
  NavigationFooter
};