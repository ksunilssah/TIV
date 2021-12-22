import apiService from './index';
import store from '../store';


export const getStockList = async () => {
	try {
		const response = await apiService.get('stocks');
		if (response.data.result) {
			store.updateStockSList(response.data.result);
		}
	} catch (error) {
		console.log('stock api error', error);
	}

}