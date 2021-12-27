import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { VolumeGrid } from './volume-grid';
import { getVolumeShocker } from '../../service/volume-shockers-service';
import { callFrequency } from '../../service/constants';
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
			headerName: 'PClose',
			field: 'previousClose'
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
		resizable: true,
	},
};

@inject('store')
@observer
class VolumeShocker extends Component {

	componentDidMount() {
		getVolumeShocker();
		this.interval = setInterval(function () {
			getVolumeShocker();
		}, callFrequency);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}


	render() {
		const { volumeShocker } = this.props.store;
		return <div className="row volume-shockers custom-grid">
			<VolumeGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={volumeShocker.long}
				defaultColDef={columnsDetails.defaultColDef}
				title='Volume Stock for Long'
			/>
			<VolumeGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={volumeShocker.short}
				defaultColDef={columnsDetails.defaultColDef}
				title='Volume Stock for short'
			/>
		</div>
	}
}
export default VolumeShocker;