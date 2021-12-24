import { makeAutoObservable } from 'mobx';

class Store {
	appLoadingStatus = false;
	volumeShocker = [];
	highMomentum = [];

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
}

const store = new Store();
export default store;
