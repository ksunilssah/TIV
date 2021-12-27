import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SectoralGrid from './sectoral-grid';
import { getSectoralView } from '../../service/sectoral-view-service';
import { callFrequency } from '../../service/constants';
import SectorViewGraph from './sector-view-graph';

const columnsDetails = {
	columnDefs: [
		{
			field: 'symbol',
			headerName: 'Symbol',
			rowDrag: true,
			width: 150,
		},
		{
			field: 'lastPrice',
			headerName: 'LTP',
			cellStyle: params => params.value < 0 ? { color: 'red' } : { color: 'white' },
			width: 100,
		},
		{
			headerName: 'Change',
			field: 'changePrice',
			cellStyle: params => params.value < 0 ? { color: 'red' } : { color: 'white' },
			width: 100,
		},
		{
			headerName: '% Change',
			field: 'pChange',
			cellStyle: params => params.value < 0 ? { color: 'red' } : { color: 'white' }
		},
		{
			headerName: 'Adv',
			field: 'advances'
		},
		{
			headerName: 'Dec',
			field: 'declines'
		},
		{
			headerName: 'PClose',
			field: 'previousClose'
		},

	],
	defaultColDef: {
		width: 110,
		sortable: true,
		filter: true,
		resizable: true,
	},
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


	render() {
		const { sectoralView } = this.props.store;
		return <div className="row sectoral-view custom-grid">
			<SectorViewGraph />
			<SectoralGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={sectoralView}
				defaultColDef={columnsDetails.defaultColDef}
				title='Nifty Index'
			/>
		</div>
	}
}
