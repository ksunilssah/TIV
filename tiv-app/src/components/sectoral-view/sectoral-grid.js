import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import IndexView from './index-view';
export default class SectoralGrid extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		isIndexViewVisitable: false,
		selectedIndex: '',
	}

	onGridReady = (params) => {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
	};


	onSelectionChanged = () => {
		const selectedRows = this.gridApi.getSelectedRows();
		this.setState({
			selectedIndex: selectedRows[0].symbol,
			isIndexViewVisitable: true,
		});
	};

	onDialogClose = () => {
		this.setState({
			isIndexViewVisitable: false,
		});
	}

	render() {
		const { rowData, columnDefs, defaultColDef, title } = this.props;
		const { isIndexViewVisitable, selectedIndex } = this.state;
		return (
			<>
				<div className="col-lg-6 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">{title}</h4>
							<div className="table-responsive">
								<div className="ag-theme-alpine-dark" style={{ height: '100%', width: '100%' }}>
									<AgGridReact
										columnDefs={columnDefs}
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
							</div>
						</div>
					</div>
				</div>
				{isIndexViewVisitable && <IndexView
					onDialogClose={this.onDialogClose}
					showDialog={isIndexViewVisitable}
					selectedIndex={selectedIndex}
				/>}
			</>

		);
	}
}
