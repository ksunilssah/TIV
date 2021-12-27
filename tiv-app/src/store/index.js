import { makeAutoObservable } from 'mobx';

class Store {
	appLoadingStatus = false;
	volumeShocker = [];
	highMomentum = [];
	sectoralView = [];

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
}

const store = new Store();
export default store;
