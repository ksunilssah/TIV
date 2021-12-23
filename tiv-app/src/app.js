import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import VolumeShocker from './components/volume-shockers';
import { getVolumeShocker } from './service/get-stock';
import { Sidebar } from './components/sidebar';
import Header from './components/header';

@inject('store')
@observer
export default class App extends Component {
	componentDidMount() {
		Promise.all([
			getVolumeShocker()
		].flat()).then(() => {
			this.props.store.updateAppStatus();
		}, () => {
			console.log('error while initializations of app')
		});
	}

	render() {
		const { appLoadingStatus } = this.props.store;
		return (
			<div className="container-scroller">
				{!appLoadingStatus ?
					<div className="loader">Loading</div> :
					<>
						<Sidebar />
						<div className="container-fluid page-body-wrapper">
							<Header />
							<div className="main-panel">
								<div className="content-wrapper">
									<VolumeShocker />
								</div>
							</div>
						</div>
					</>
				}
			</div>
		);
	}
}
