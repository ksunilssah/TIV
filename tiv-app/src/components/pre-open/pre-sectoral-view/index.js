import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PreSectoralGrid from './pre-sectoral-grid';
import { getPreIndexView } from '../../../service/pre-index-view-service';
import { callFrequency, defaultColDef } from '../../../service/constants';
import PreSectorViewGraph from './pre-sector-view-graph';

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

	]
};

@inject('store')
@observer
export default class PreIndexView extends Component {

	componentDidMount() {
		getPreIndexView();
		this.interval = setInterval(function () {
			getPreIndexView();
		}, callFrequency);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onRowSelect = (index) => {
		const { setActiveIndex } = this.props.store;
		setActiveIndex(index);
	}


	render() {
		const { preIndexList } = this.props.store;
		return <div className="row pre-index-view custom-grid">
			<PreSectorViewGraph
				rowData={preIndexList}
			/>
			<PreSectoralGrid
				columnDefs={columnsDetails.columnDefs}
				rowData={preIndexList}
				defaultColDef={defaultColDef}
				title='Pre Nifty Index'
				onRowSelect={this.onRowSelect}
			/>
		</div>
	}
}
