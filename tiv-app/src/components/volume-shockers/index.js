import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { VolumeGrid } from './volume-grid';
import { getVolumeShocker } from '../../service/get-stock';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

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
			headerName: 'Volume',
			field: 'totalTurnover'
		}

	],
	defaultColDef: {
		width: 110,
		sortable: true,
		filter: true,
	},
};

@inject('store')
@observer
class VolumeShocker extends Component {
	interval;
	componentDidMount() {
		this.interval = setInterval(function () {
			getVolumeShocker();
		}, 60000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}


	render() {
		const { volumeShockerShort, volumeShockerLong } = this.props.store;
		return <div className="row volume-shockers">
			<VolumeGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={volumeShockerLong}
				defaultColDef={columnsDetails.defaultColDef}
				title='Volume Stock for Long'
				key={1}
			/>
			<VolumeGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={volumeShockerShort}
				defaultColDef={columnsDetails.defaultColDef}
				title='Volume Stock for short'
				key={2}
			/>
		</div>
	}
}
export default VolumeShocker;