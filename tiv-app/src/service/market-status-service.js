import apiService from './index';
import store from '../store';
import { marketStatus } from './constants';

export const getMarketStatus = async () => {
	try {
		const response = await apiService.get(marketStatus);
		if (response.data) {
			store.updateMarketStatus(response.data);
		}
	} catch (error) {
		console.log('market status api error', error);
	}

}


