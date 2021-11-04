import React from 'react'
import AppTemplate from './AppTemplate';

export default {
  title: 'Template/AppTemplate',
  component: AppTemplate,
  parameters: {
    layout: 'fullscreen'
  }
};

export const AppTemplateStoryNotHome = () => (
  <AppTemplate homeButtonText="Home" historyButtonText="Past Missions" isHomePage={false}>
    <div>child</div>
  </AppTemplate>
);

export const AppTemplateStoryHome = () => (
  <AppTemplate  homeButtonText="Home" historyButtonText="Past Missions" isHomePage={true}>
    <div>child</div>
  </AppTemplate>
);
