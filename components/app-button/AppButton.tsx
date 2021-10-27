import React, { FC } from 'react';

import './AppButton.css';

interface AppButtonInterface {
  text: string
  variant: 'welcome' | 'primary'
}

const AppButton: FC<AppButtonInterface> = ({
  text,
  variant
}) => {
  return (
    <button className={`app-button app-button-${variant}`}>{text}</button>
  );
};

export default AppButton;