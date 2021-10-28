import React from 'react'
import { NavigationSide } from './Navigation';

export default {
  title: 'Components/NavigationSide',
  component: NavigationSide
};

// Note: Use wrapper div to cap out width for element
export const NavigationSideStory = () => (
  <div>
    <NavigationSide
      historyButtonText="Past Missions"
      homeButtonText="Home"
      upcomingButtonText="Upcoming"
    />
  </div>
);
