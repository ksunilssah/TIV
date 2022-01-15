import apiService from './index';
import store from '../store';
import { sectorView, indexView } from './constants';

export const getSectoralView = async () => {
  try {
    const response = await apiService.get(sectorView);
    if (response.data) {
      store.updateSectoralView(response.data);
    }
  } catch (error) {
    console.log('Sector api error', error);
  }
};

export const getIndexList = async (index) => {
  try {
    const response = await apiService.get(`${indexView}/${index}`);
    if (response.data) {
      store.updateIndexView(response.data);
    }
  } catch (error) {
    console.log('Index api error', error);
  }
};
