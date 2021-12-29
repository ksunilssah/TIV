import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VolumeShocker from './components/volume-shockers';
import { Sidebar } from './components/sidebar';
import Header from './components/header';
import HighMomentum from './components/high-momentum';
import SectoralView from './components/sectoral-view';

const App = () => <div className="container-scroller">
	<Sidebar />
	<div className="container-fluid page-body-wrapper">
		<Header />
		<div className="main-panel">
			<div className="content-wrapper">
				<Routes >
					<Route path="/" element={<h1>Home</h1>} />
					<Route path="high-momentum" element={<HighMomentum />} />
					<Route path="volume-shocker" element={<VolumeShocker />} />
					<Route path="sectoral-view" element={<SectoralView />} />
				</Routes>
			</div>
		</div>
	</div>
</div>;




export default App;