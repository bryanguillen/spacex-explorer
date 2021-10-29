import React from 'react'
import PageHeader from './PageHeader';

export default {
  title: 'Components/PageHeader',
  component: PageHeader
};

// Note: Use wrapper div since text is white
export const PageHeaderStory = () => (
  <div style={{ padding: '10px', backgroundColor: '#000000' }}>
    <PageHeader value="Mock Header"/>
  </div>
);
