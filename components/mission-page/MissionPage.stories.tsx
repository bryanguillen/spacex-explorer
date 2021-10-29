import React from 'react'
import MissionPage from './MissionPage';

export default {
  title: 'Pages/Mission',
  component: MissionPage
};

export const MissionPageStory = () => (
  <MissionPage
    name="Starlink-9 (v1.0) & BlackSky Global 5-6"
    imageUrl="https://live.staticflickr.com/65535/50198901143_0bb53a499e_o.jpg"
    fieldsSectionHeader="About"
    date={{ name: 'Date', value: '10/26/2021' }}
    launchLocation={{ name: 'Location', value: 'Cape Canaveral, Florida' }}
    rocket={{ name: 'Rocket', value: 'Falcon 9' }}
    details={{ name: 'Details', value: 'This mission will launch the ninth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the tenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes a rideshare of two BlackSky satellites on top of the Starlink stack. The booster for this mission is expected to land an ASDS. ' }}
  />
);
