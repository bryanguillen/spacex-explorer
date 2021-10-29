import React from 'react';
import { IconContext } from 'react-icons';
import { MdHome, MdHistory, MdUpcoming } from 'react-icons/md';

import './Navigation.css';

const iconsStyles = { color: '#C9D1D9', size: '2rem' };

interface NavigationProps {
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
    <span className="navigation-footer-text">{buttonText}</span>
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

const NavigationSideText = ({
  buttonText
}: NavigationTextProps) => {
  return (
    <span className="navigation-side-text">{buttonText}</span>
  );
};

const NavigationSide = ({
  historyButtonText,
  homeButtonText,
  upcomingButtonText
}: NavigationProps) => {
  return (
    <IconContext.Provider value={iconsStyles}>
      <div className="navigation-side">
        <div className="navigation-side-button" role="button">
          <MdHome/>
          <NavigationSideText
            buttonText={homeButtonText}
          />
        </div>
        <div className="navigation-side-button" role="button">
          <MdHistory/>
          <NavigationSideText
            buttonText={historyButtonText}
          />
        </div>
        <div className="navigation-side-button" role="button">
          <MdUpcoming/>
          <NavigationSideText
            buttonText={upcomingButtonText}
          />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export {
  NavigationFooter,
  NavigationSide
};