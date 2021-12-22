import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Grid from './components/grid';
import { getStockList } from './service/get-stock';
@inject('store')
@observer
export default class App extends Component {


	async componentDidMount() {
		try {
			await getStockList();
			this.props.store.updateAppStatus();
		} catch (error) {
			console.log('error while initializations of app', error)
		}
	}



	render() {
		const { appLoadingStatus } = this.props.store;

		return (
			<div className="wrapper">
				{!appLoadingStatus ?
					<div className="loader">Loading</div> :
					<div className="container">
						<Grid></Grid>
					</div>
				}
			</div>
		);
	}
}
