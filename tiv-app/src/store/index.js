import { makeAutoObservable } from 'mobx';

class Store {
	appLoadingStatus = false;
	volumeShocker = [];
	highMomentum = [];
	sectoralView = [];
	indexView = [];
	marketStatus = {};

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
}

const store = new Store();
export default store;
