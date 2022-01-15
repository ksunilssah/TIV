import apiService from './index';
import store from '../store';
import { volumeShocker } from './constants';

export const getVolumeShocker = async () => {
  try {
    const response = await apiService.get(volumeShocker);
    if (response.data) {
      store.updateVolumeShocker(response.data);
    }
  } catch (error) {
    console.log('stock api error', error);
  }
};
