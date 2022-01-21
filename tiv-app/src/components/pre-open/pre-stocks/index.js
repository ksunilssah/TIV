import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { PreStocksGrid } from './pre-stocks-grid';
import { getPreOpenStocksList } from '../../../service/pre-open-service';
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
    {
      headerName: 'Volume',
      field: 'totalTurnover',
    },
  ],
};

@inject('store')
@observer
class PreStocks extends Component {
  componentDidMount() {
    getPreOpenStocksList();
    this.interval = setInterval(function () {
      getPreOpenStocksList();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { preOpenStockList } = this.props.store;
    return (
      <div className="row pre-stocks custom-grid">
        <PreStocksGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={preOpenStockList.long}
          defaultColDef={defaultColDef}
          title="Pre Open Stock for Long"
        />
        <PreStocksGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={preOpenStockList.short}
          defaultColDef={defaultColDef}
          title="Pre Open Stock for short"
        />
      </div>
    );
  }
}
export default PreStocks;
