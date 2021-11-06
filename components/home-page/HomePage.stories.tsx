import React from 'react'
import HomePage from './HomePage';

export default {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    layout: 'fullscreen'
  }
};

export const HomePageStory = () => <HomePage onClickWelcomeButton={() => console.log('Welcome!')} welcomeButtonText="Start Exploring" welcomeHeaderText="Welcome to SpaceX Explorer"/>;
