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
  state = {
    startTime: '9:15',
    endTime: '15:30',
  };
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

  onStartTimeChange = (event) => {
    const newTime = event.target.value;
    this.setState({
      startTime: newTime,
    });
  };

  onEndTimeChange = (event) => {
    const newTime = event.target.value;
    this.setState({
      endTime: newTime,
    });
  };

  onTimeRangeSubmit = () => {
    const { oiCompassQuery, updateOiCompassQuery } = this.props.store;
    const { symbol, expiry } = oiCompassQuery;
    const { startTime, endTime } = this.state;
    updateOiCompassQuery({
      symbol,
      expiry,
      startTime,
      endTime,
    });

    getOICompassResult({
      symbol,
      expiry,
      startTime,
      endTime,
    });
  };

  onRangeReset = () => {
    const { updateOiCompassQuery } = this.props.store;
    this.setState({
      startTime: '9:15',
      endTime: '15:30',
    });

    updateOiCompassQuery({
      startTime: '9:15',
      endTime: '15:30',
    });

    getOICompassResult();
  };

  render() {
    const { oiCompassList, oiCompassQuery } = this.props.store;
    const { symbol, expiry } = oiCompassQuery;
    const { startTime, endTime } = this.state;

    return (
      <div className="oi-compass">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 grid-margin">
                    <div className="row">
                      <div className="col-xl-3 col-sm-3 form-group select-row">
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
                      <div className="col-xl-3 col-sm-3 form-group">
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

                  <div className="col-md-6 grid-margin time-range-row">
                    <div className="start-time">
                      <label htmlFor="interval">Start time</label>
                      <select
                        id="interval"
                        className="form-control time-interval"
                        onChange={this.onStartTimeChange}
                        value={startTime}
                      >
                        <option value="09:15">09:15</option>
                        <option value="09:20">09:20</option>
                        <option value="09:25">09:25</option>
                        <option value="09:30">09:30</option>
                        <option value="09:35">09:35</option>
                        <option value="09:40">09:40</option>
                        <option value="09:45">09:45</option>
                        <option value="09:50">09:50</option>
                        <option value="09:55">09:55</option>
                        <option value="10:00">10:00</option>
                        <option value="10:05">10:05</option>
                        <option value="10:10">10:10</option>
                        <option value="10:15">10:15</option>
                        <option value="10:20">10:20</option>
                        <option value="10:25">10:25</option>
                        <option value="10:30">10:30</option>
                        <option value="10:35">10:35</option>
                        <option value="10:40">10:40</option>
                        <option value="10:45">10:45</option>
                        <option value="10:50">10:50</option>
                        <option value="10:55">10:55</option>
                        <option value="11:00">11:00</option>
                        <option value="11:05">11:05</option>
                        <option value="11:10">11:10</option>
                        <option value="11:15">11:15</option>
                        <option value="11:20">11:20</option>
                        <option value="11:25">11:25</option>
                        <option value="11:30">11:30</option>
                        <option value="11:35">11:35</option>
                        <option value="11:40">11:40</option>
                        <option value="11:45">11:45</option>
                        <option value="11:50">11:50</option>
                        <option value="11:55">11:55</option>
                        <option value="12:00">12:00</option>
                        <option value="12:05">12:05</option>
                        <option value="12:10">12:10</option>
                        <option value="12:15">12:15</option>
                        <option value="12:20">12:20</option>
                        <option value="12:25">12:25</option>
                        <option value="12:30">12:30</option>
                        <option value="12:35">12:35</option>
                        <option value="12:40">12:40</option>
                        <option value="12:45">12:45</option>
                        <option value="12:50">12:50</option>
                        <option value="12:55">12:55</option>
                        <option value="13:00">13:00</option>
                        <option value="13:05">13:05</option>
                        <option value="13:10">13:10</option>
                        <option value="13:15">13:15</option>
                        <option value="13:20">13:20</option>
                        <option value="13:25">13:25</option>
                        <option value="13:30">13:30</option>
                        <option value="13:35">13:35</option>
                        <option value="13:40">13:40</option>
                        <option value="13:45">13:45</option>
                        <option value="13:50">13:50</option>
                        <option value="13:55">13:55</option>
                        <option value="14:00">14:00</option>
                        <option value="14:05">14:05</option>
                        <option value="14:10">14:10</option>
                        <option value="14:15">14:15</option>
                        <option value="14:20">14:20</option>
                        <option value="14:25">14:25</option>
                        <option value="14:30">14:30</option>
                        <option value="14:35">14:35</option>
                        <option value="14:40">14:40</option>
                        <option value="14:45">14:45</option>
                        <option value="14:50">14:50</option>
                        <option value="14:55">14:55</option>
                        <option value="15:00">15:00</option>
                        <option value="15:05">15:05</option>
                        <option value="15:10">15:10</option>
                        <option value="15:15">15:15</option>
                        <option value="15:20">15:20</option>
                        <option value="15:25">15:25</option>
                      </select>
                    </div>

                    <div className="end-time">
                      <label htmlFor="interval">End Time</label>
                      <select
                        id="interval"
                        className="form-control time-interval"
                        onChange={this.onEndTimeChange}
                        value={endTime}
                      >
                        <option value="09:20">09:20</option>
                        <option value="09:25">09:25</option>
                        <option value="09:30">09:30</option>
                        <option value="09:35">09:35</option>
                        <option value="09:40">09:40</option>
                        <option value="09:45">09:45</option>
                        <option value="09:50">09:50</option>
                        <option value="09:55">09:55</option>
                        <option value="10:00">10:00</option>
                        <option value="10:05">10:05</option>
                        <option value="10:10">10:10</option>
                        <option value="10:15">10:15</option>
                        <option value="10:20">10:20</option>
                        <option value="10:25">10:25</option>
                        <option value="10:30">10:30</option>
                        <option value="10:35">10:35</option>
                        <option value="10:40">10:40</option>
                        <option value="10:45">10:45</option>
                        <option value="10:50">10:50</option>
                        <option value="10:55">10:55</option>
                        <option value="11:00">11:00</option>
                        <option value="11:05">11:05</option>
                        <option value="11:10">11:10</option>
                        <option value="11:15">11:15</option>
                        <option value="11:20">11:20</option>
                        <option value="11:25">11:25</option>
                        <option value="11:30">11:30</option>
                        <option value="11:35">11:35</option>
                        <option value="11:40">11:40</option>
                        <option value="11:45">11:45</option>
                        <option value="11:50">11:50</option>
                        <option value="11:55">11:55</option>
                        <option value="12:00">12:00</option>
                        <option value="12:05">12:05</option>
                        <option value="12:10">12:10</option>
                        <option value="12:15">12:15</option>
                        <option value="12:20">12:20</option>
                        <option value="12:25">12:25</option>
                        <option value="12:30">12:30</option>
                        <option value="12:35">12:35</option>
                        <option value="12:40">12:40</option>
                        <option value="12:45">12:45</option>
                        <option value="12:50">12:50</option>
                        <option value="12:55">12:55</option>
                        <option value="13:00">13:00</option>
                        <option value="13:05">13:05</option>
                        <option value="13:10">13:10</option>
                        <option value="13:15">13:15</option>
                        <option value="13:20">13:20</option>
                        <option value="13:25">13:25</option>
                        <option value="13:30">13:30</option>
                        <option value="13:35">13:35</option>
                        <option value="13:40">13:40</option>
                        <option value="13:45">13:45</option>
                        <option value="13:50">13:50</option>
                        <option value="13:55">13:55</option>
                        <option value="14:00">14:00</option>
                        <option value="14:05">14:05</option>
                        <option value="14:10">14:10</option>
                        <option value="14:15">14:15</option>
                        <option value="14:20">14:20</option>
                        <option value="14:25">14:25</option>
                        <option value="14:30">14:30</option>
                        <option value="14:35">14:35</option>
                        <option value="14:40">14:40</option>
                        <option value="14:45">14:45</option>
                        <option value="14:50">14:50</option>
                        <option value="14:55">14:55</option>
                        <option value="15:00">15:00</option>
                        <option value="15:05">15:05</option>
                        <option value="15:10">15:10</option>
                        <option value="15:15">15:15</option>
                        <option value="15:20">15:20</option>
                        <option value="15:25">15:25</option>
                        <option value="15:30">15:30</option>
                      </select>
                    </div>
                    <div className="button-row">
                      <button
                        type="button"
                        className="btn btn-primary btn-fw submit-btn"
                        onClick={this.onTimeRangeSubmit}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-fw submit-btn"
                        onClick={this.onRangeReset}
                      >
                        Reset
                      </button>
                    </div>
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
