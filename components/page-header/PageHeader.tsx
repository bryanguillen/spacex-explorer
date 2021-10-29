import React from 'react';

export interface PageHeaderProps {
  className?: string
  value: string
}

const PageHeader = ({
  className,
  value
}: PageHeaderProps) => {
  return (
    <h1 className={`dark-mode-font-color ${className ? className : ''}`}>{value}</h1>
  );
};

export default PageHeader;