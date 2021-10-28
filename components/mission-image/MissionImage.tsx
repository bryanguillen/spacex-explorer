import React from 'react';

import './MissionImage.css';

interface MissionImageProps {
  imageUrl: string
}

const MissionImage = ({
  imageUrl
}: MissionImageProps) => {
  return (
    <img className="mission-image" src={imageUrl} alt="mission image"/>
  )
};

export default MissionImage;