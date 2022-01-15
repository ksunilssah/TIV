import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SectoralGrid from './sectoral-grid';
import { getSectoralView } from '../../service/sectoral-view-service';
import { callFrequency, defaultColDef } from '../../service/constants';
import SectorViewGraph from './sector-view-graph';

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
      headerName: 'Change',
      field: 'changePrice',
      cellStyle: (params) =>
        params.value < 0 ? { color: 'red' } : { color: 'white' },
      width: 100,
    },
    {
      headerName: '% Change',
      field: 'pChange',
      cellStyle: (params) =>
        params.value < 0 ? { color: 'red' } : { color: 'white' },
      width: 100,
    },
    {
      headerName: 'Adv',
      field: 'advances',
      width: 100,
    },
    {
      headerName: 'Dec',
      field: 'declines',
      width: 100,
    },
    {
      headerName: 'PClose',
      field: 'previousClose',
      width: 100,
    },
  ],
};

@inject('store')
@observer
export default class SectoralView extends Component {
  componentDidMount() {
    getSectoralView();
    this.interval = setInterval(function () {
      getSectoralView();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onRowSelect = (index) => {
    const { setActiveIndex } = this.props.store;
    setActiveIndex(index);
  };

  render() {
    const { sectoralView } = this.props.store;
    return (
      <div className="row sectoral-view custom-grid">
        <SectorViewGraph rowData={sectoralView} />
        <SectoralGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={sectoralView}
          defaultColDef={defaultColDef}
          title="Nifty Index"
          onRowSelect={this.onRowSelect}
        />
      </div>
    );
  }
}
