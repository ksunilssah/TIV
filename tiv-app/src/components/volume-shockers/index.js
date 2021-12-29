import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { VolumeGrid } from './volume-grid';
import { getVolumeShocker } from '../../service/volume-shockers-service';
import { callFrequency, defaultColDef } from '../../service/constants';
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
			cellStyle: params => params.value < 0 ? { color: 'red' } : { color: 'white' },
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
			cellStyle: params => params.value < 0 ? { color: 'red' } : { color: 'white' },
			width: 100,
		},
		{
			headerName: '% Change',
			field: 'pChange',
			cellStyle: params => params.value < 0 ? { color: 'red' } : { color: 'white' },
			width: 100,
		},
		{
			headerName: 'Volume',
			field: 'totalTurnover'
		}

	]
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
				defaultColDef={defaultColDef}
				title='Volume Stock for Long'
			/>
			<VolumeGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={volumeShocker.short}
				defaultColDef={defaultColDef}
				title='Volume Stock for short'
			/>
		</div>
	}
}
export default VolumeShocker;