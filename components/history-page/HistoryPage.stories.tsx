import React from 'react'
import HistoryPage from './HistoryPage';

export default {
  title: 'Pages/HistoryPage',
  component: HistoryPage
};

const historyPageMockData = [
  {
    missionName: 'Mission Name',  
    missionDate: { value: '10/26/2021', name: 'Date' },  
    missionDetails: { value: 'These are the details for the mission.  Lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum ', name: 'Details'}, 
    readMoreText: 'Read More'
  },
  {
    missionName: 'Mission 2',  
    missionDate: { value: '10/26/2021', name: 'Date' },  
    missionDetails: { value: 'These are the details for the mission.  Lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum ', name: 'Details'}, 
    readMoreText: 'Read More'
  },
  {
    missionName: 'Mission 3',  
    missionDate: { value: '10/26/2021', name: 'Date' },  
    missionDetails: { value: 'These are the details for the third mission on this mock page.  Lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum ', name: 'Details'}, 
    readMoreText: 'Read More'
  },
];

export const HistoryPageStory = () => (
  <HistoryPage
    missions={historyPageMockData}
    pageHeader="Past Missions"
  />
);
