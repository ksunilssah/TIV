import apiService from './index';
import store from '../store';
import { getEgo } from './constants';

export const getEgoResult = async () => {
  try {
    const response = await apiService.submit(getEgo, store.egoQuery);
    if (response.data) {
      const result = [];
      response.data.forEach((item) => {
        result.push({
          'ce-day-low': item.CE.low,
          'ce-day-high': item.CE.high,
          'ce-target': item.CE.target,
          'ce-status': item.CE.status,
          'ce-ltp': item.CE.ltp,
          strike: item.strike,
          'pe-day-low': item.PE.low,
          'pe-day-high': item.PE.high,
          'pe-target': item.PE.target,
          'pe-status': item.PE.status,
          'pe-ltp': item.PE.ltp,
        });
      });
      store.updateEgoStrategyResultSet(result);
    }
  } catch (error) {
    console.log('EGO api error', error);
  }
};
