import React from 'react';

import styles from './MissionImage.module.css';

interface MissionImageProps {
  imageUrl: string
}

/**
 * @description Component for image on mission page; like text fields, there is a possibility
 * there is no link, and thus, we need to not render the component when there is no image
 */
const MissionImage = ({
  imageUrl
}: MissionImageProps) => {
  return (
    imageUrl ? <img className={styles.base} src={imageUrl} alt="mission image"/> : null
  )
};

export default MissionImage;