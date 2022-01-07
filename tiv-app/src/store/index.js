import { makeAutoObservable } from 'mobx';

class Store {
	appLoadingStatus = false;
	volumeShocker = [];
	highMomentum = [];
	sectoralView = [];
	indexView = [];
	preIndexList = [];
	preStocksList = [];
	marketStatus = {};
	preOpenStockList = {};

	constructor() {
		makeAutoObservable(this)
	}

	updateAppStatus = () => {
		this.appLoadingStatus = true;
	};

	updateVolumeShocker = (stocks) => {
		this.volumeShocker = stocks;
	};

	updateMomentum = (volume) => {
		this.highMomentum = volume;
	};

	updateSectoralView = (sectors) => {
		this.sectoralView = sectors;
	}

	updateIndexView = (indexList) => {
		this.indexView = indexList;
	}

	updateMarketStatus = (marketData) => {
		this.marketStatus = marketData;
	}

	updatePreIndexList = (indexList) => {
		this.preIndexList = indexList;
	}
	updatePreStocksList = (stockList) => {
		this.preStocksList = stockList;
	}

	updatePreOpenStockList = (stockList) => {
		this.preOpenStockList = stockList;
	}
}

const store = new Store();
export default store;
