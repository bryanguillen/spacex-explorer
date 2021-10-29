import React from 'react';

import './PageHeader.css';

export interface PageHeaderProps {
  className?: string
  value: string
}

const PageHeader = ({
  className,
  value
}: PageHeaderProps) => {
  return (
    <h1 className={`page-header ${className ? className : ''}`}>{value}</h1>
  );
};

export default PageHeader;