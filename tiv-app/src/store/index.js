import { makeAutoObservable } from 'mobx';
import { getExpiryDate } from '../helpers/date-helper';
class Store {
  appLoadingStatus = false;
  volumeShocker = [];
  highMomentum = [];
  momentumSpike = [];
  sectoralView = [];
  indexView = [];
  preIndexList = [];
  preStocksList = [];
  marketStatus = {};
  preOpenStockList = {};
  preOpenNifty50 = {};
  preOpenNiftyBank = {};
  preOpenFnO = {};
  headerStockList = {};
  breakOut15Min = [];
  trendingOI = {
    symbol: 'NIFTY',
    expiry: getExpiryDate(),
    time_interval: 5,
    strikes: [],
  };

  strikesList = [];
  trendingOIResult = [];
  selectedStrikesList = [];
  oiCompassList = {
    strikesList: [],
    PE: [],
    CE: [],
    netCE: [],
    netPE: [],
  };

  oiCompassQuery = {
    symbol: 'NIFTY',
    expiry: getExpiryDate(),
    startTime: '9:15',
    endTime: '15:30',
  };

  egoStrategyResultSet = [];
  egoQuery = {
    symbol: 'NIFTY',
    expiry: getExpiryDate(),
  };

  constructor() {
    makeAutoObservable(this);
  }

  updateHeaderStockList = (stocks) => {
    this.headerStockList = stocks;
  };
  updatePreOpenNifty50 = (niftyList) => {
    this.preOpenNifty50 = niftyList;
  };

  updatePreOpenNiftyBank = (niftyBank) => {
    this.preOpenNiftyBank = niftyBank;
  };

  updatePreOpenFnO = (fno) => {
    this.preOpenFnO = fno;
  };

  updateAppStatus = () => {
    this.appLoadingStatus = true;
  };

  updateVolumeShocker = (stocks) => {
    this.volumeShocker = stocks;
  };

  updateMomentum = (volume) => {
    this.highMomentum = volume;
  };
  updateMomentumSpike = (volume) => {
    this.momentumSpike = volume;
  };

  updateSectoralView = (sectors) => {
    this.sectoralView = sectors;
  };

  updateIndexView = (indexList) => {
    this.indexView = indexList;
  };

  updateMarketStatus = (marketData) => {
    this.marketStatus = marketData;
  };

  updatePreIndexList = (indexList) => {
    this.preIndexList = indexList;
  };
  updatePreStocksList = (stockList) => {
    this.preStocksList = stockList;
  };

  updatePreOpenStockList = (stockList) => {
    this.preOpenStockList = stockList;
  };

  updateBreakOut15Min = (breakoutList) => {
    this.breakOut15Min = breakoutList;
  };

  updateTrendingOI = (OIData) => {
    this.trendingOI = { ...this.trendingOI, ...OIData };
  };

  updateStrikesList = (strikes) => {
    this.strikesList = strikes;
  };

  updateTrendingOIResult = (oiData) => {
    this.trendingOIResult = oiData;
  };

  updateSelectedStrikes = (strikeList) => {
    this.selectedStrikesList = strikeList;
  };

  updateOICompassLList = (compassList) => {
    this.oiCompassList = compassList;
  };

  updateOiCompassQuery = (query) => {
    this.oiCompassQuery = { ...this.oiCompassQuery, ...query };
  };

  updateEgoStrategyResultSet = (data) => {
    this.egoStrategyResultSet = data;
  };

  updateEgoQuery = (query) => {
    this.egoQuery = { ...this.egoQuery, ...query };
  };
}

const store = new Store();
export default store;
