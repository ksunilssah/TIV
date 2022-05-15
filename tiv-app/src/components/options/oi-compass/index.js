import './styles.scss';
import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
// import RangeSlider from './range-slider';
import { getOICompassResult } from '../../../service/oi-compass-service';
import { callFrequency } from '../../../service/constants';
import OIGraph from './oi-graph';
import PeCeGraph from './ce-pe-graph';
import PeCeNetGraph from './ce-pe-net-graph';
import NetOIGraph from './net-oi-graph';
@inject('store')
@observer
export default class OICompass extends Component {
  componentDidMount() {
    getOICompassResult();
    this.interval = setInterval(function () {
      getOICompassResult();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onIndexChange = (event) => {
    const symbol = event.target.value;
    const { updateOiCompassQuery, oiCompassQuery } = this.props.store;
    const { expiry } = oiCompassQuery;
    updateOiCompassQuery({ symbol });
    getOICompassResult({
      symbol,
      expiry,
    });
  };

  onDateChange = (event) => {
    const expiry = event.target.value;
    const { updateOiCompassQuery, oiCompassQuery } = this.props.store;
    const { symbol } = oiCompassQuery;
    updateOiCompassQuery({ expiry });

    getOICompassResult({
      symbol,
      expiry,
    });
  };

  render() {
    const { oiCompassList, oiCompassQuery } = this.props.store;
    const { symbol, expiry } = oiCompassQuery;
    return (
      <div className="oi-compass">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-2 col-sm-2 form-group">
                    <label htmlFor="index">Index</label>
                    <select
                      onChange={this.onIndexChange}
                      value={symbol}
                      id="index"
                      className="form-control"
                    >
                      <option value="NIFTY">Nifty</option>
                      <option value="BANKNIFTY">Bank Nifty</option>
                    </select>
                  </div>
                  <div className="col-xl-2 col-sm-2 form-group">
                    <label htmlFor="date-picker">Select Expiry</label>
                    <input
                      id="date-picker"
                      className="form-control"
                      type="date"
                      name="trip-start"
                      onChange={this.onDateChange}
                      value={expiry}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">OI Compass</h4>
                <OIGraph oiCompassList={oiCompassList} />
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <PeCeGraph oiCompassList={oiCompassList} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pe-ce-oi-row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <PeCeNetGraph oiCompassList={oiCompassList} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row net-oi-compass">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Net OI</h4>
                <NetOIGraph oiCompassList={oiCompassList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
