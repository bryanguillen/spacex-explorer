import React from 'react'
import AppButton from './AppButton';

export default {
  title: 'Components/AppButton',
  component: AppButton
};

export const PrimaryButtonStory = () => <AppButton variant="primary" text="Primary"/>;
export const WelcomeButtonStory = () => <AppButton variant="welcome" text="Welcome"/>;
