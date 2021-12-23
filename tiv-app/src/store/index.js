import { makeObservable, observable, action } from 'mobx';

class Store {
	appLoadingStatus = false;
	volumeShockerShort = [];
	volumeShockerLong = [];

	constructor() {
		makeObservable(this, {
			appLoadingStatus: observable,
			volumeShockerShort: observable,
			volumeShockerLong: observable,
			updateAppStatus: action,
			updateVolumeShockerLong: action,
			updateVolumeShockerShort: action,

			// stockList: computed
		})
	}

	updateAppStatus = () => {
		this.appLoadingStatus = true;
	};

	updateVolumeShockerLong = (stockLong) => {
		this.volumeShockerLong = stockLong;
	};

	updateVolumeShockerShort = (stockShort) => {
		this.volumeShockerShort = stockShort;
	};
}

const store = new Store();
export default store;
