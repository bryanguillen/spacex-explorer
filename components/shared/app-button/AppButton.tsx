import React from 'react';

import styles from './AppButton.module.css';

interface AppButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  text: string
  variant: 'welcome' | 'primary'
}

const AppButton = ({
  onClick,
  text,
  variant
}: AppButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles.base} ${styles[variant]}`}>{text}</button>
  );
};

export default AppButton;