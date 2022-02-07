import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { BreakoutGrid } from './breakout-grid';
import { getCandleData } from '../../../service/momentum-service';
import { callFrequency, defaultColDef } from '../../../service/constants';

const columnsDetails = {
  columnDefs: [
    {
      field: 'symbol',
      headerName: 'Symbol',
      rowDrag: true,
    },
    {
      headerName: 'Open',
      field: 'open',
      width: 150,
    },
    {
      headerName: 'Close',
      field: 'close',
      width: 150,
    },
    {
      headerName: 'High',
      field: 'high',
      width: 150,
    },
    {
      headerName: 'Low',
      field: 'low',
      width: 150,
    },
    {
      headerName: 'Volume',
      field: 'totalTurnover',
      width: 'auto',
    },
    {
      headerName: 'Volume Breakout',
      field: 'volume',
      width: 'auto',
    },
  ],
};

@inject('store')
@observer
export default class Breakout extends Component {
  componentDidMount() {
    getCandleData();
    this.interval = setInterval(function () {
      getCandleData();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { breakOut15Min } = this.props.store;
    return (
      <div className="row breakout custom-grid">
        <BreakoutGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={breakOut15Min}
          defaultColDef={defaultColDef}
          title="Breakout (15min)"
        />
      </div>
    );
  }
}
