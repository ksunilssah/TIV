import apiService from './index';
import store from '../store';
import { getHeader } from './constants';

export const getHeaderStockList = async () => {
  try {
    const response = await apiService.get(getHeader);
    if (response.data) {
      store.updateHeaderStockList(response.data);
    }
  } catch (error) {
    console.log('Header stocks api error', error);
  }
};
