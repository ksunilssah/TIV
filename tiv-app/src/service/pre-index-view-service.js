import apiService from './index';
import store from '../store';
import {
  preOpenSectoralView,
  preOpenIndexView,
  preOpenStocks,
} from './constants';

export const getPreIndexView = async () => {
  try {
    const response = await apiService.get(preOpenSectoralView);
    if (response.data) {
      store.updatePreIndexList(response.data);
    }
  } catch (error) {
    console.log('Pre-Index api error', error);
  }
};

export const getPreStockList = async (index) => {
  try {
    const response = await apiService.get(`${preOpenIndexView}/${index}`);
    if (response.data) {
      store.updatePreStocksList(response.data);
    }
  } catch (error) {
    console.log('Pre-stocks api error', error);
  }
};

export const getPreOpenStocksList = async () => {
  try {
    const response = await apiService.get(preOpenStocks);
    if (response.data) {
      store.updatePreOpenStockList(response.data);
    }
  } catch (error) {
    console.log('Pre-Index api error', error);
  }
};
