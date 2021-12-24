import React from 'react';
import { AgGridReact } from 'ag-grid-react';

export const MomentumGrid = (props) => {
	const { rowData, columnDefs, defaultColDef, title } = props;
	return (
		<div className="col-lg-6 grid-margin stretch-card">
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">{title}</h4>
					<div className="table-responsive">
						<div className="ag-theme-alpine-dark" style={{ height: 400, width: '100%' }}>
							<AgGridReact
								columnDefs={columnDefs}
								defaultColDef={defaultColDef}
								rowDragManaged={true}
								animateRows={true}
								rowData={rowData}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}
