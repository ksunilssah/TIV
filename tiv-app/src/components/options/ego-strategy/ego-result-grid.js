import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { inject, observer } from 'mobx-react';
import { defaultColDef, callFrequency } from '../../../service/constants';
import { getEgoResult } from '../../../service/ego-service';

const columnsDetails = {
  columnDefs: [
    {
      headerName: 'Low',
      field: 'ce-day-low',
      width: '90px',
    },
    {
      headerName: 'High',
      field: 'ce-day-high',
      width: '90px',
    },
    {
      headerName: 'Target',
      field: 'ce-target',
      width: '95px',
    },
    {
      headerName: 'Status',
      field: 'ce-status',
      width: '120px',
    },
    {
      headerName: 'Call LTP',
      field: 'ce-ltp',
      width: '105px',
    },
    {
      headerName: 'Strike',
      field: 'strike',
      width: '92px',
    },
    {
      headerName: 'Put LTP',
      field: 'pe-ltp',
      width: '105px',
    },
    {
      headerName: 'Status',
      field: 'pe-status',
      width: '120px',
    },
    {
      headerName: 'Target',
      field: 'pe-target',
      width: '95px',
    },
    {
      headerName: 'High',
      field: 'pe-day-high',
      width: '90px',
    },
    {
      headerName: 'Low',
      field: 'pe-day-low',
      width: '90px',
    },
  ],
};

@inject('store')
@observer
export default class EgoStrategyResultGrid extends Component {
  componentDidMount() {
    getEgoResult();
    this.interval = setInterval(function () {
      getEgoResult();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { egoStrategyResultSet } = this.props.store;
    return (
      <div className="col-lg-12 grid-margin stretch-card ego-result-grid">
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
                  rowData={egoStrategyResultSet}
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
