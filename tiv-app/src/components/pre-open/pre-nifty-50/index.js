import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { PreNiftyGrid } from './pre-nifty-grid';
import { getHighMomentum } from '../../../service/high-momentum-service';
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
			cellStyle: params => params.value < 0 ? { color: 'red' } : { color: 'green' },
			width: 100,
		},
		{
			headerName: '% Change',
			field: 'pChange',
			cellStyle: params => params.value < 0 ? { color: 'red' } : { color: 'green' },
			width: 100,
		}
	]
};

@inject('store')
@observer
export default class PreNifty50 extends Component {

	componentDidMount() {
		getHighMomentum();
		this.interval = setInterval(function () {
			getHighMomentum();
		}, callFrequency);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}


	render() {
		const { highMomentum } = this.props.store;
		return <div className="row high-momentum custom-grid">
			<PreNiftyGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={highMomentum.long}
				defaultColDef={defaultColDef}
				title='Nifty 50 Stock for long'
			/>
			<PreNiftyGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={highMomentum.short}
				defaultColDef={defaultColDef}
				title='Nifty 50 Stock for short'
			/>
		</div>
	}
}
