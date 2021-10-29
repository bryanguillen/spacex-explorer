import React from 'react';
import AppButton from '../app-button/AppButton';
import PageHeader from '../page-header/PageHeader';

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
        <PageHeader
          className="home-page-welcome-header"
          value={welcomeHeaderText}
        />
        <AppButton text={welcomeButtonText} variant="welcome"/>
      </div>
    </div>
  );
};

export default HomePage;