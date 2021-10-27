import React from 'react';

import './AppButton.css';

interface AppButtonInterface {
  text: string
  variant: 'welcome' | 'primary'
}

const AppButton = ({
  text,
  variant
}: AppButtonInterface) => {
  return (
    <button className={`app-button app-button-${variant}`}>{text}</button>
  );
};

export default AppButton;