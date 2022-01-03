import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DoughnutGraph from './doughnut-graph';
import SectorViewGraph from './sector-view';
import { getMarketStatus } from '../../service/market-status-service';
import { callFrequency } from '../../service/constants';


@inject('store')
@observer
export default class MarketStatus extends Component {

	componentDidMount() {
		getMarketStatus();
		this.interval = setInterval(function () {
			getMarketStatus();
		}, callFrequency);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}


	render() {
		const { marketStatus } = this.props.store;
		const { index_name, index_price, NIFTY50, NIFTYBANK, FNO } = marketStatus;


		return <>
			<div className="row">
				<div className="col-md-4 grid-margin stretch-card">
					<div className="card">
						<div className="card-body doughnut-height">
							<DoughnutGraph
								name="NIFTY50"
								data={NIFTY50}
							/>
						</div>
					</div>
				</div>
				<div className="col-md-4 grid-margin stretch-card">
					<div className="card">
						<div className="card-body doughnut-height">
							<DoughnutGraph
								name="NIFTYBANK"
								data={NIFTYBANK}
							/>
						</div>
					</div>
				</div>
				<div className="col-md-4 grid-margin stretch-card">
					<div className="card">
						<div className="card-body doughnut-height">
							<DoughnutGraph
								name="FNO"
								data={FNO}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<SectorViewGraph
					labels={index_name}
					data={index_price}
				/>
			</div>
		</>
	}
}