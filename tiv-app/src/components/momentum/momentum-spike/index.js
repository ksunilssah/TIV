import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { MomentumSpikeGrid } from './momentum-spike';
import { getMomentumSpike } from '../../../service/momentum-service';
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
export default class MomentumSpike extends Component {
  componentDidMount() {
    getMomentumSpike();
    this.interval = setInterval(function () {
      getMomentumSpike();
    }, callFrequency);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { momentumSpike } = this.props.store;
    return (
      <div className="row high-momentum custom-grid">
        <MomentumSpikeGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={momentumSpike.long}
          defaultColDef={defaultColDef}
          title="Momentum Spike for Long"
        />
        <MomentumSpikeGrid
          columnDefs={columnsDetails.columnDefs}
          rowData={momentumSpike.short}
          defaultColDef={defaultColDef}
          title="Momentum Spike for short"
        />
      </div>
    );
  }
}
