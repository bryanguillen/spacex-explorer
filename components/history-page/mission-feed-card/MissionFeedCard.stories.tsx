import React from 'react'
import MissionFeedCard from './MissionFeedCard';

export default {
  title: 'Components/MissionFeedCard',
  component: MissionFeedCard
};

const storyData = {
  missionName: 'Mission Name',  
  missionDate: { value: '10/26/2021', name: 'Date' },  
  missionDetails: { value: 'These are the details for the mission.  Lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum ', name: 'Details'},
  missionId: 1, 
  readMoreText: 'Read More'
};

export const MissionFeedCardStory = () => (
  <MissionFeedCard
    missionName={storyData.missionName}
    missionDate={storyData.missionDate}
    missionDetails={storyData.missionDetails}
    missionId={storyData.missionId}
    readMoreText={storyData.readMoreText}
  />
);
