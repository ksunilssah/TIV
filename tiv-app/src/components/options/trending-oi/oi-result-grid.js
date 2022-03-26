import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { inject, observer } from 'mobx-react';
import { defaultColDef, callFrequency } from '../../../service/constants';
import { getTrendingOIResult } from '../../../service/trending-oi-service';
const columnsDetails = {
  columnDefs: [
    {
      headerName: 'Time',
      field: 'time',
      rowDrag: true,
    },
    {
      headerName: 'LTP',
      field: 'ltp',
    },
    {
      field: 'ce',
      headerName: 'Change In CE',
      cellStyle: (params) => {
        const { ceCellColor } = params.data;
        return {
          color: ceCellColor,
        };
      },
    },
    {
      headerName: 'Change in PE',
      field: 'pe',
      cellStyle: (params) => {
        const { peCellColor } = params.data;
        return {
          color: peCellColor,
        };
      },
    },
    {
      headerName: 'Diff in OI',
      field: 'OIDiff',
      cellStyle: (params) =>
        params.value < 0 ? { color: 'red' } : { color: 'white' },
    },
    {
      headerName: 'PCR',
      field: 'pcr',
    },
  ],
};

@inject('store')
@observer
export default class TrendingOIResultGrid extends Component {
  componentDidMount() {
    getTrendingOIResult();
    this.interval = setInterval(function () {
      getTrendingOIResult();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { trendingOIResult } = this.props.store;
    return (
      <div className="col-lg-12 grid-margin stretch-card oi-result-grid">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <div
                className="ag-theme-alpine-dark"
                style={{ height: '100%', width: '100%' }}
              >
                <AgGridReact
                  columnDefs={columnsDetails.columnDefs}
                  defaultColDef={defaultColDef}
                  rowDragManaged={true}
                  animateRows={true}
                  rowData={trendingOIResult}
                  enableCellTextSelection={true}
                  rowSelection="single"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
