import React from 'react';

import './AppButton.css';

interface AppButtonProps {
  text: string
  variant: 'welcome' | 'primary'
}

const AppButton = ({
  text,
  variant
}: AppButtonProps) => {
  return (
    <button className={`app-button app-button-${variant}`}>{text}</button>
  );
};

export default AppButton;