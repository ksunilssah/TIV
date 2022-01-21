import apiService from './index';
import store from '../store';
import { highMomentum, momentumSpike } from './constants';

export const getHighMomentum = async () => {
  try {
    const response = await apiService.get(highMomentum);
    if (response.data) {
      store.updateMomentum(response.data);
    }
  } catch (error) {
    console.log('High momentum stock api error', error);
  }
};

export const getMomentumSpike = async () => {
  try {
    const response = await apiService.get(momentumSpike);
    if (response.data) {
      store.updateMomentumSpike(response.data);
    }
  } catch (error) {
    console.log('Momentum spike stock api error', error);
  }
};
