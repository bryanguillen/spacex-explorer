import React from 'react'
import Navigation from './Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation
};

// Note: Use wrapper div to cap out width for element
export const NavigationStory = () => (
  <div style={{ maxWidth: '600px' }}>
    <Navigation
      historyButtonText="Past Missions"
      homeButtonText="Home"
      onClickHistory={() => undefined}
      onClickHome={() => undefined}
    />
  </div>
);
