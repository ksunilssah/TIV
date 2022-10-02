import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import IndexStockOverlay from './index-stocks-overlay';
import { defaultColDef } from '../../service/constants';

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
      headerName: 'Advances',
      field: 'advances',
      width: 100,
      cellStyle: () => ({
        color: 'green',
      }),
    },
    {
      headerName: 'Declines',
      field: 'declines',
      width: 100,
      cellStyle: () => ({
        color: 'red',
      }),
    },
    {
      headerName: 'Previous Close',
      field: 'previousClose',
      width: 180,
    },
  ],
};

export default class IndexGridView extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isIndexViewVisitable: false,
    selectedIndex: '',
  };

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onSelectionChanged = () => {
    const selectedRows = this.gridApi.getSelectedRows();
    this.setState({
      selectedIndex: selectedRows[0].symbol,
      isIndexViewVisitable: true,
    });
  };

  onDialogClose = () => {
    this.setState({
      isIndexViewVisitable: false,
    });
  };

  render() {
    const { rowData } = this.props;
    const { isIndexViewVisitable, selectedIndex } = this.state;
    return (
      <>
        <div className="col-lg-6 stretch-card sectoral-view custom-grid">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Index</h4>
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
        {isIndexViewVisitable && (
          <IndexStockOverlay
            onDialogClose={this.onDialogClose}
            showDialog={isIndexViewVisitable}
            selectedIndex={selectedIndex}
          />
        )}
      </>
    );
  }
}
