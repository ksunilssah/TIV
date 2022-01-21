import apiService from './index';
import store from '../store';
import {
  preOpenSectoralView,
  preOpenIndexView,
  preOpenStocks,
  preOpenFnO,
  preOpenNifty50,
  preOpenNiftyBank,
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

export const getPreFnO = async () => {
  try {
    const response = await apiService.get(preOpenFnO);
    if (response.data) {
      store.updatePreOpenFnO(response.data);
    }
  } catch (error) {
    console.log('Pre FnO api error', error);
  }
};

export const getPreOpenNifty50 = async () => {
  try {
    const response = await apiService.get(preOpenNifty50);
    if (response.data) {
      store.updatePreOpenNifty50(response.data);
    }
  } catch (error) {
    console.log('Pre Nifty 50 api error', error);
  }
};

export const getPreOpenNiftyBank = async () => {
  try {
    const response = await apiService.get(preOpenNiftyBank);
    if (response.data) {
      store.updatePreOpenNiftyBank(response.data);
    }
  } catch (error) {
    console.log('Pre Nifty Bank api error', error);
  }
};
