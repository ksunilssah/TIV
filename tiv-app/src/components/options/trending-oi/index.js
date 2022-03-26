import '../styles.scss';

import React from 'react';
import QueryPanel from './query-panel';
import TrendingOIResultGrid from './oi-result-grid';

const TradingOI = () => {
  return (
    <div className="trending-oi">
      <QueryPanel />
      <TrendingOIResultGrid />
    </div>
  );
};

export default TradingOI;
