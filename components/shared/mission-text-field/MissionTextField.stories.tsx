import React from 'react'
import MissionTextField from './MissionTextField';

export default {
  title: 'Components/MissionTextField',
  component: MissionTextField
};

// Note: Use wrapper div since text is white
export const MissionTextFieldStory = () => (
  <div style={{ padding: '10px', backgroundColor: '#000000' }}>
    <MissionTextField name="Date" value="10/26/21"/>
  </div>
);

export const MissionTextFieldEmptyStory = () => (
  <div style={{ padding: '10px', backgroundColor: '#000000' }}>
    <MissionTextField name="Date" value=""/>
  </div>
);
