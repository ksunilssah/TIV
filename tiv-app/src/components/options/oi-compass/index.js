import './styles.scss';

import React from 'react';
import RangeSlider from './range-slider';
import OIGraph from './oi-graph';

const OICompass = () => (
  <>
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <RangeSlider />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">OI Compass</h4>
            <OIGraph />
          </div>
        </div>
      </div>
      <div className="col-md-4 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Transaction History</h4>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default OICompass;
