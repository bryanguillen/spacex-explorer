import React from 'react';
import AppButton from '../app-button/AppButton';

import './HomePage.css';

interface HomePageProps {
  welcomeButtonText: string
  welcomeHeaderText: string
}

const HomePage = ({
  welcomeButtonText,
  welcomeHeaderText
}: HomePageProps) => {
  return (
    <div className="home-page">
      <div className="home-page-content-container">
        <h1 className="home-page-welcome-header">{welcomeHeaderText}</h1>
        <AppButton text={welcomeButtonText} variant="welcome"/>
      </div>
    </div>
  );
};

export default HomePage;