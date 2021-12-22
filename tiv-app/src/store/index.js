import { makeObservable, observable, action } from 'mobx';

class Store {
	appLoadingStatus = false;
	stockList = [];

	constructor() {
		makeObservable(this, {
			appLoadingStatus: observable,
			stockList: observable,
			updateAppStatus: action,
			updateStockSList: action,
			// stockList: computed
		})
	}

	updateAppStatus = () => {
		this.appLoadingStatus = true;
	}
	updateStockSList = (stock) => {
		this.stockList = stock;
	}
}

const store = new Store();
export default store;
