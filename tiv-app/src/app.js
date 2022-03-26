import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import VolumeShocker from './components/volume-shockers';
import { Sidebar } from './components/sidebar';
import Header from './components/header';
import HighMomentum from './components/momentum/high-momentum';
import MomentumSpike from './components/momentum/momentum-spike';
import SectoralView from './components/sectoral-view';
import MarketStatus from './components/market-status';
import PreStocks from './components/pre-open/pre-stocks';
import PreIndexView from './components/pre-open/pre-sectoral-view';
import PreNifty50 from './components/pre-open/pre-nifty-50';
import PreFnO from './components/pre-open/pre-fno';
import PreBankNifty from './components/pre-open/pre-bank-nifty';
import Breakout from './components/momentum/breakout';
import TradingOI from './components/options/trending-oi';
const App = () => {
  const [isOpen, openMobileMenu] = useState(false);

  return (
    <div className="container-scroller">
      <Sidebar isMenuOpen={isOpen} />
      <div className="container-fluid page-body-wrapper">
        <Header openMobileMenu={openMobileMenu} isMenuOpen={isOpen} />
        <div className="main-panel">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<MarketStatus />} />
              <Route path="/high-momentum" element={<HighMomentum />} />
              <Route path="/momentum-spike" element={<MomentumSpike />} />
              <Route path="/trending-oi" element={<TradingOI />}></Route>
              <Route path="/volume-shocker" element={<VolumeShocker />} />
              <Route path="/sectoral-view" element={<SectoralView />} />
              <Route path="/pre-open-index" element={<PreIndexView />} />
              <Route path="/pre-open-stocks" element={<PreStocks />} />
              <Route path="/pre-open-nifty-50" element={<PreNifty50 />} />
              <Route path="/pre-open-fno" element={<PreFnO />} />
              <Route path="/pre-open-bank-nifty" element={<PreBankNifty />} />
              <Route path="/breakout-15" element={<Breakout />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
