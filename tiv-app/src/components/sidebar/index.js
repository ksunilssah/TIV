import React from 'react';

export const Sidebar = () => {
	return <nav className="sidebar sidebar-offcanvas" id="sidebar">
		<div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
			<a id="logo" className="sidebar-brand brand-logo" href="/">
				Trading in Veins</a>
			<a id="logo-min" className="sidebar-brand brand-logo-mini" href="/">TIV</a>
		</div>
		<ul className="nav">

			<li className="nav-item menu-items">
				<a className="nav-link" href="/market-status">
					<span className="menu-icon">
						<i className="mdi mdi-speedometer"></i>
					</span>
					<span className="menu-title">Market Status</span>
				</a>
			</li>
			<li className="nav-item menu-items">
				<a className="nav-link" href="/volume-shocker" aria-expanded="false" aria-controls="ui-basic">
					<span className="menu-icon">
						<i className="mdi mdi-laptop"></i>
					</span>
					<span className="menu-title">Volume Shockers</span>
				</a>
			</li>
			<li className="nav-item menu-items">
				<a className="nav-link" href="/high-momentum">
					<span className="menu-icon">
						<i className="mdi mdi-playlist-play"></i>
					</span>
					<span className="menu-title">High Momentum</span>
				</a>
			</li>
			<li className="nav-item menu-items">
				<a className="nav-link" href="sectoral-view">
					<span className="menu-icon">
						<i className="mdi mdi-table-large"></i>
					</span>
					<span className="menu-title">Sectoral View</span>
				</a>
			</li>
			<li className="nav-item menu-items">
				<a className="nav-link" href="/live-market">
					<span className="menu-icon">
						<i className="mdi mdi-chart-bar"></i>
					</span>
					<span className="menu-title">Live Market</span>
				</a>
			</li>
			<li className="nav-item menu-items">
				<a className="nav-link" href="/pre-open">
					<span className="menu-icon">
						<i className="mdi mdi-contacts"></i>
					</span>
					<span className="menu-title">Pre Open</span>
				</a>
			</li>
			<li className="nav-item menu-items">
				<a className="nav-link" href="/setup-scripts" aria-expanded="false" aria-controls="auth">
					<span className="menu-icon">
						<i className="mdi mdi-security"></i>
					</span>
					<span className="menu-title">Setup Scripts</span>
				</a>
			</li>
		</ul>
	</nav>
}