import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { getTrendingOIResult } from '../../../service/trending-oi-service';
import StrikesSelection from './strikes-selection';

@inject('store')
@observer
export default class QueryPanel extends Component {
  state = {
    isStrikesViewVisitable: false,
  };

  onIndexChange = (event) => {
    const symbol = event.target.value;
    const { updateTrendingOI } = this.props.store;
    updateTrendingOI({ symbol });
  };

  onDateChange = (event) => {
    const expiry = event.target.value;
    const { updateTrendingOI } = this.props.store;
    updateTrendingOI({ expiry });
  };

  onIntervalChange = (event) => {
    const time_interval = event.target.value;
    const { updateTrendingOI } = this.props.store;
    updateTrendingOI({ time_interval });
  };

  onSubmit = () => {
    getTrendingOIResult();
  };

  onStrikeBtnClick = () => {
    this.setState({
      isStrikesViewVisitable: true,
    });
  };

  onDialogClose = () => {
    this.setState({
      isStrikesViewVisitable: false,
    });
  };

  render() {
    const { symbol, expiry, time_interval } = this.props.store.trendingOI;
    const { isStrikesViewVisitable } = this.state;
    return (
      <>
        <div className="row query-panel">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-2 col-sm-2 form-group">
                    <label htmlFor="index">Name</label>
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
                    <label htmlFor="date-picker">Expiry Date</label>
                    <input
                      id="date-picker"
                      className="form-control"
                      type="date"
                      name="trip-start"
                      onChange={this.onDateChange}
                      value={expiry}
                    />
                  </div>
                  <div className="col-xl-2 col-sm-2 form-group">
                    <label htmlFor="interval">Time Interval</label>
                    <select
                      id="interval"
                      className="form-control time-interval"
                      onChange={this.onIntervalChange}
                      value={time_interval}
                    >
                      <option value="3">3</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="45">45</option>
                      <option value="60">60</option>
                    </select>
                  </div>
                  <div className="col-xl-2 col-sm-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-fw submit-btn"
                      onClick={this.onSubmit}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="col-xl-3 col-sm-3">
                    <button
                      type="button"
                      className="btn btn-info btn-icon-text strike-btn"
                      onClick={this.onStrikeBtnClick}
                    >
                      Change Strike Price
                      <i className="mdi mdi-file-check btn-icon-append"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isStrikesViewVisitable && (
          <StrikesSelection
            onDialogClose={this.onDialogClose}
            showDialog={isStrikesViewVisitable}
          />
        )}
      </>
    );
  }
}
