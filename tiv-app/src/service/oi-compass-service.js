import apiService from './index';
import store from '../store';
import { getStrikes } from './constants';

export const getStrikesList = async () => {
  try {
    const response = await apiService.get(getStrikes);
    if (response.data) {
      const selectedStrikesList = [];
      response.data.forEach((item) => {
        if (item.selected == true) {
          selectedStrikesList.push(item.strike);
        }
      });
      store.updateStrikesList(response.data);
      //  return response.data;
    }
  } catch (error) {
    console.log('Strikes api error', error);
  }
};
