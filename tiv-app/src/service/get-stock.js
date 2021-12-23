import apiService from './index';
import store from '../store';
import { volumeShocker } from './constants';

export const getVolumeShocker = async () => {
	try {
		const response = await apiService.get(volumeShocker);
		if (response.data) {
			const { long, short } = response.data;
			store.updateVolumeShockerLong(long);
			store.updateVolumeShockerShort(short);
		}
	} catch (error) {
		console.log('stock api error', error);
	}

}