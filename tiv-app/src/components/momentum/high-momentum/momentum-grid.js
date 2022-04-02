import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { tradingViewURl } from '../../../service/constants';

export class MomentumGrid extends Component {
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onSelectionChanged = () => {
    const selectedRows = this.gridApi.getSelectedRows();
    const { symbol } = selectedRows[0];
    window.open(`${tradingViewURl}/chart/?symbol=NSE:${symbol}`, '_blank');
  };
  render() {
    const { rowData, columnDefs, defaultColDef, title } = this.props;
    return (
      <div className="col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <div className="table-responsive">
              <div
                className="ag-theme-alpine-dark"
                style={{ height: '100%', width: '100%' }}
              >
                <AgGridReact
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                  rowDragManaged={true}
                  animateRows={true}
                  rowData={rowData}
                  enableCellTextSelection={true}
                  rowSelection="single"
                  onGridReady={this.onGridReady}
                  onSelectionChanged={this.onSelectionChanged}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
