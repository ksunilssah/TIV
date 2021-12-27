import apiService from './index';
import store from '../store';
import { sectorView } from './constants';

export const getSectoralView = async () => {
	try {
		const response = await apiService.get(sectorView);
		if (response.data) {
			store.updateSectoralView(response.data);
		}
	} catch (error) {
		console.log('stock api error', error);
	}

}