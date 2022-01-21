import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { PreBankNiftyGrid } from './pre-bank-nifty-grid';
import { getPreOpenNiftyBank } from '../../../service/pre-open-service';
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
export default class PreBankNifty extends Component {
  componentDidMount() {
    getPreOpenNiftyBank();
    this.interval = setInterval(function () {
      getPreOpenNiftyBank();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { preOpenNiftyBank } = this.props.store;
    return (
      <div className="row high-momentum custom-grid">
        <PreBankNiftyGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={preOpenNiftyBank.long}
          defaultColDef={defaultColDef}
          title="Pre Open Bank Nifty Stock for long"
        />
        <PreBankNiftyGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={preOpenNiftyBank.short}
          defaultColDef={defaultColDef}
          title="Pre Open Bank Nifty Stock for short"
        />
      </div>
    );
  }
}
