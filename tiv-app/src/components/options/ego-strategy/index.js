import './styles.scss';

import React from 'react';
import QueryPanel from './query-panel';
import EgoStrategyResultGrid from './ego-result-grid';

const EgoStrategy = () => {
  return (
    <div className="ego-strategy">
      <QueryPanel />
      <EgoStrategyResultGrid />
    </div>
  );
};

export default EgoStrategy;
