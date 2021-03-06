import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { PreFnOGrid } from './pre-fno-grid';
import { getPreFnO } from '../../../service/pre-open-service';
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
export default class PreFnO extends Component {
  componentDidMount() {
    getPreFnO();
    this.interval = setInterval(function () {
      getPreFnO();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { preOpenFnO } = this.props.store;
    return (
      <div className="row high-momentum custom-grid">
        <PreFnOGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={preOpenFnO.long}
          defaultColDef={defaultColDef}
          title="Pre Open F&O Stock for long"
        />
        <PreFnOGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={preOpenFnO.short}
          defaultColDef={defaultColDef}
          title="Pre Open F&O Stock for short"
        />
      </div>
    );
  }
}
