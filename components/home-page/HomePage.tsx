import React from 'react';
import AppButton from '../shared/app-button/AppButton';
import PageHeader from '../shared/page-header/PageHeader';

import styles from './HomePage.module.css';

export interface HomePageProps {
  welcomeButtonText: string
  welcomeHeaderText: string
}

const HomePage = ({
  welcomeButtonText,
  welcomeHeaderText
}: HomePageProps) => {
  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <PageHeader
          className={styles.header}
          value={welcomeHeaderText}
        />
        <AppButton text={welcomeButtonText} variant="welcome"/>
      </div>
    </div>
  );
};

export default HomePage;