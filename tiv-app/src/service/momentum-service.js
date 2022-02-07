import apiService from './index';
import store from '../store';
import { highMomentum, momentumSpike, getCandle } from './constants';
import { maxBy, findIndex, sumBy } from 'lodash';

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

export const getCandleData = async () => {
  try {
    const response = await apiService.get(`${getCandle}/15`);
    if (response.data) {
      const breakoutList = [];
      response.data.forEach(({ candle, symbol }) => {
        if (candle && candle.length > 0) {
          const maxClosePriceItem = maxBy(candle, 'close');
          const indexNum = findIndex(candle, maxClosePriceItem);
          const firstCandleTurnover = candle[0].totalTurnover;
          const copyOfCandle = [...candle];
          copyOfCandle.shift();
          const totalTurnover = sumBy(copyOfCandle, 'totalTurnover') / 14;

          if (indexNum === 0) {
            maxClosePriceItem.symbol = symbol;
            maxClosePriceItem.volume = 'No';
            breakoutList.push(maxClosePriceItem);
            if (firstCandleTurnover > totalTurnover) {
              maxClosePriceItem.volume = 'Yes';
            }
          }
        }
      });

      store.updateBreakOut15Min(breakoutList);
    }
  } catch (error) {
    console.log('Breakout (15min) stock api error', error);
  }
};
