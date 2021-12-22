import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { getStockList } from '../../service/get-stock';

@inject('store')
@observer
export default class Grid extends Component {
	componentDidMount() {
		setInterval(function () {
			getStockList();
		}, 1000);
	}


	render() {
		return (
			<div className="ag-theme-alpine" style={{ height: 400, width: 640 }}>
				<AgGridReact rowData={this.props.store.stockList}>
					<AgGridColumn sortable field="symbol" />
					<AgGridColumn sortable field="LTP" />
					<AgGridColumn sortable field="volume" />
				</AgGridReact>
			</div>
		);
	}
}
