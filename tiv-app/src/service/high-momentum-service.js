import apiService from './index';
import store from '../store';
import { highMomentum } from './constants';

export const getHighMomentum = async () => {
  try {
    const response = await apiService.get(highMomentum);
    if (response.data) {
      store.updateMomentum(response.data);
    }
  } catch (error) {
    console.log('stock api error', error);
  }
};
