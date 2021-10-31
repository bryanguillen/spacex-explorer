import React from 'react';

import styles from './AppButton.module.css';

interface AppButtonProps {
  text: string
  variant: 'welcome' | 'primary'
}

const AppButton = ({
  text,
  variant
}: AppButtonProps) => {
  return (
    <button className={`${styles.base} ${styles[variant]}`}>{text}</button>
  );
};

export default AppButton;