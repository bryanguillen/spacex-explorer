import React from 'react'
import AppButton from './AppButton';

export default {
  title: 'Components/AppButton',
  component: AppButton
};

export const PrimaryButtonStory = () => <AppButton onClick={(event) => console.log('clicked')} variant="primary" text="Primary"/>;
export const WelcomeButtonStory = () => <AppButton onClick={(event) => console.log('clicked welcome')} variant="welcome" text="Welcome"/>;
