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
    readMoreText: 'Read More',
    missionId: 0
  },
  {
    missionName: 'Mission 2',  
    missionDate: { value: '10/26/2021', name: 'Date' },  
    missionDetails: { value: 'These are the details for the mission.  Lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum ', name: 'Details'}, 
    readMoreText: 'Read More',
    missionId: 1
  },
  {
    missionName: 'Mission 3',  
    missionDate: { value: '10/26/2021', name: 'Date' },  
    missionDetails: { value: 'These are the details for the third mission on this mock page.  Lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum ', name: 'Details'}, 
    readMoreText: 'Read More',
    missionId: 2
  },
];

export const HistoryPageStory = () => (
  <HistoryPage
    allMissionsVisible={true}
    getMoreMissions={() => console.log('getting more missions...')}
    missions={historyPageMockData}
    pageHeader="Past Missions"
  />
);
