
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Modal } from 'react-bootstrap';
import { AgGridReact } from 'ag-grid-react';
import { getIndexList } from '../../service/sectoral-view-service';
import { callFrequency, defaultColDef, tradingViewURl } from '../../service/constants';

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
export default class IndexView extends Component {

	componentDidMount() {
		const { selectedIndex } = this.props;
		if (selectedIndex) {
			getIndexList(selectedIndex);
		}

		this.interval = setInterval(function () {
			getIndexList(selectedIndex);
		}, callFrequency);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onClose = () => {
		const { onDialogClose } = this.props;
		onDialogClose();
	}

	onGridReady = (params) => {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
	};


	onSelectionChanged = () => {
		const selectedRows = this.gridApi.getSelectedRows();
		const { symbol, exchange } = selectedRows[0];
		window.open(`${tradingViewURl}/chart/?symbol=${exchange}:${symbol}`, '_blank');
	};


	render() {

		const { store, showDialog, selectedIndex } = this.props;
		const { indexView } = store;
		let rowData = [];
		let changePer = '';
		let changeP = '';
		let PClose = '';
		let ltp = '';

		if (indexView.length > 0) {
			rowData = indexView[0].list;
			const { pChange, changePrice, previousClose, lastPrice } = indexView[0];
			changePer = pChange;
			changeP = changePrice;
			PClose = previousClose;
			ltp = lastPrice;
		}


		return <Modal
			show={showDialog}
			onHide={this.onClose}
			size="lg"
			centered
			className="custom-grid"
		>
			<Modal.Header closeButton>
				<Modal.Title>
					{selectedIndex}
					<small className="price">{`LTP: 1${ltp} | Change: ${changeP} (${changePer}%) | Prev Close: ${PClose}`} </small>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="ag-theme-alpine-dark index-view" style={{ height: '400px', width: '100%' }}>
					<AgGridReact
						columnDefs={columnsDetails.columnDefs}
						defaultColDef={defaultColDef}
						rowDragManaged={true}
						animateRows={true}
						rowData={rowData}
						enableCellTextSelection={true}
						rowSelection="single"
						onGridReady={this.onGridReady}
						onSelectionChanged={this.onSelectionChanged}
					/>
				</div>
			</Modal.Body>
		</Modal>
	}
}