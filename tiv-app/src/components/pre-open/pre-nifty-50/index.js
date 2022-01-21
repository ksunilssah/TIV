import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { PreNiftyGrid } from './pre-nifty-grid';
import { getPreOpenNifty50 } from '../../../service/pre-open-service';
import { callFrequency, defaultColDef } from '../../../service/constants';

const columnsDetails = {
  columnDefs: [
    {
      field: 'symbol',
      headerName: 'Symbol',
      rowDrag: true,
    },
    {
      field: 'lastPrice',
      headerName: 'LTP',
      cellStyle: (params) =>
        params.value < 0 ? { color: 'red' } : { color: 'white' },
      width: 100,
    },
    {
      headerName: 'PClose',
      field: 'previousClose',
      width: 100,
    },
    {
      headerName: 'Change',
      field: 'changePrice',
      cellStyle: (params) =>
        params.value < 0 ? { color: 'red' } : { color: 'green' },
      width: 100,
    },
    {
      headerName: '% Change',
      field: 'pChange',
      cellStyle: (params) =>
        params.value < 0 ? { color: 'red' } : { color: 'green' },
      width: 100,
    },
  ],
};

@inject('store')
@observer
export default class PreNifty50 extends Component {
  componentDidMount() {
    getPreOpenNifty50();
    this.interval = setInterval(function () {
      getPreOpenNifty50();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { preOpenNifty50 } = this.props.store;
    return (
      <div className="row high-momentum custom-grid">
        <PreNiftyGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={preOpenNifty50.long}
          defaultColDef={defaultColDef}
          title="Pre Open Nifty 50 Stock for long"
        />
        <PreNiftyGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={preOpenNifty50.short}
          defaultColDef={defaultColDef}
          title="Pre Open Nifty 50 Stock for short"
        />
      </div>
    );
  }
}
