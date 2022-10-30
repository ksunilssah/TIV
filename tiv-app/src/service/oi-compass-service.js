import apiService from './index';
import store from '../store';
import { getOICompass } from './constants';

export const getOICompassResult = async (query) => {
  try {
    let queryObj = {};
    if (query) {
      queryObj = query;
    } else {
      queryObj = store.oiCompassQuery;
    }
    const response = await apiService.submit(getOICompass, queryObj);
    if (response.data) {
      store.updateOIDataLoadingState(true);
      const strikesList = [];
      const PE = [];
      const CE = [];
      const netCE = [];
      const netPE = [];
      const { strikes } = response.data;
      for (const key in strikes) {
        strikesList.push(key);
        const { ce, pe, ce_net, pe_net } = strikes[key];
        PE.push(pe);
        CE.push(ce);
        netCE.push(ce_net);
        netPE.push(pe_net);
      }
      store.updateOICompassLList({ strikesList, PE, CE, netCE, netPE });
    }
  } catch (error) {
    console.log('oi compass api error', error);
  }
};
