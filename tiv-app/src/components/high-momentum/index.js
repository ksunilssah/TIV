import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { MomentumGrid } from './momentum-grid';
import { getHighMomentum } from '../../service/high-momentum-service';
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
export default class HighMomentum extends Component {

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
			<MomentumGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={highMomentum.long}
				defaultColDef={columnsDetails.defaultColDef}
				title='Momentum Stock for Long'
			/>
			<MomentumGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={highMomentum.short}
				defaultColDef={columnsDetails.defaultColDef}
				title='Momentum Stock for short'
			/>
		</div>
	}
}
