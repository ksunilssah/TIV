import apiService from './index';
import store from '../store';
import { getTrendingOI, getStrikes } from './constants';

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
      store.updateSelectedStrikes(selectedStrikesList);
      store.updateStrikesList(response.data);
      return response.data;
    }
  } catch (error) {
    console.log('Strikes api error', error);
  }
};

export const getTrendingOIResult = async () => {
  try {
    let strikesList = [];
    if (store.selectedStrikesList.length === 0) {
      strikesList = await getStrikesList();
    } else {
      strikesList = store.selectedStrikesList;
    }

    if (strikesList.length > 0) {
      const { selectedStrikesList: strikes, trendingOI } = store;

      const query = {
        ...trendingOI,
        strikes,
      };
      const response = await apiService.submit(getTrendingOI, query);
      if (response.data) {
        const oiData = response.data;
        const result = oiData.map(({ ce, pe, ltp, datetime }, index) => {
          const date = datetime.split(' ');
          const intCE = parseInt(ce);
          const intPE = parseInt(pe);
          const nextRow = oiData[index + 1];
          const OIDiff = intPE - intCE;
          let ceCellColor;
          let peCellColor;
          let oiDiffNextRow;
          let oiDiffColor = 'white';
          if (nextRow) {
            ceCellColor = ce - parseInt(nextRow.ce) > 0 ? 'green' : 'red';
            peCellColor = pe - parseInt(nextRow.pe) > 0 ? 'green' : 'red';
            oiDiffNextRow = parseInt(nextRow.pe) - parseInt(nextRow.ce);
            oiDiffColor = OIDiff - oiDiffNextRow > 0 ? 'green' : 'red';
          }
          const OIDiffView = OIDiff - oiDiffNextRow;
          return {
            time: date[1],
            ce,
            pe,
            ltp,
            OIDiff,
            oiDiffColor,
            pcr: (intPE / intCE).toFixed(2),
            ceCellColor,
            peCellColor,
            changeInDirection: OIDiffView,
            OIDiffView: OIDiffView >= 0 ? 'Up' : 'Down',
            sentiments: OIDiff >= 0 ? 'Bullish' : 'Bearish',
          };
        });

        store.updateTrendingOIResult(result);
      }
    }
  } catch (error) {
    console.log('Trending OI api error', error);
  }
};
