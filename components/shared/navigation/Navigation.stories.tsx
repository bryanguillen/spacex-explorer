import React from 'react'
import NavigationFooter from './Navigation';

export default {
  title: 'Components/NavigationFooter',
  component: NavigationFooter
};

// Note: Use wrapper div to cap out width for element
export const NavigationFooterStory = () => (
  <div style={{ maxWidth: '600px' }}>
    <NavigationFooter
      historyButtonText="Past Missions"
      homeButtonText="Home"
      upcomingButtonText="Upcoming"
    />
  </div>
);
