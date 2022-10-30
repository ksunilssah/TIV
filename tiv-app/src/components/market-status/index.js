import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DoughnutGraph from './doughnut-graph';
import IndexGraphView from './index-graph-view';
import { getMarketStatus } from '../../service/market-status-service';
import { callFrequency } from '../../service/constants';
import { getSectoralView } from '../../service/sectoral-view-service';
import IndexGridView from './index-grid-view';

@inject('store')
@observer
export default class MarketStatus extends Component {
  componentDidMount() {
    getMarketStatus();
    getSectoralView();
    this.interval = setInterval(function () {
      getMarketStatus();
      getSectoralView();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { marketStatus, sectoralView } = this.props.store;
    const {
      index_name,
      index_price,
      NIFTY50,
      NIFTYBANK,
      NIFTY100,
      NIFTY200,
      NIFTYNEXT50,
      FNO,
    } = marketStatus;

    return (
      <div className="market-status">
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body doughnut-height">
                <DoughnutGraph name="NIFTY50" data={NIFTY50} />
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body doughnut-height">
                <DoughnutGraph name="NIFTYBANK" data={NIFTYBANK} />
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body doughnut-height">
                <DoughnutGraph name="FNO" data={FNO} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body doughnut-height">
                <DoughnutGraph name="NIFTYNEXT50" data={NIFTYNEXT50} />
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body doughnut-height">
                <DoughnutGraph name="NIFTY100" data={NIFTY100} />
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body doughnut-height">
                <DoughnutGraph name="NIFTY200" data={NIFTY200} />
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <IndexGraphView labels={index_name} data={index_price} />
          <IndexGridView rowData={sectoralView} />
        </div>
      </div>
    );
  }
}
