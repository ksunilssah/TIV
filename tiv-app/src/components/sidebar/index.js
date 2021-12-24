import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
	return <nav className="sidebar sidebar-offcanvas" id="sidebar">
		<div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
			<Link id="logo" className="sidebar-brand brand-logo" to="/">
				Trading in Veins</Link>
			<Link id="logo-min" className="sidebar-brand brand-logo-mini" to="/">TIV</Link>
		</div>
		<ul className="nav">

			<li className="nav-item menu-items">
				<Link className="nav-link" to="/market-status">
					<span className="menu-icon">
						<i className="mdi mdi-speedometer"></i>
					</span>
					<span className="menu-title">Market Status</span>
				</Link>
			</li>
			<li className="nav-item menu-items">
				<Link className="nav-link" to="/volume-shocker" aria-expanded="false" aria-controls="ui-basic">
					<span className="menu-icon">
						<i className="mdi mdi-laptop"></i>
					</span>
					<span className="menu-title">Volume Shockers</span>
				</ Link>
			</li>
			<li className="nav-item menu-items">
				<Link className="nav-link" to="/high-momentum">
					<span className="menu-icon">
						<i className="mdi mdi-playlist-play"></i>
					</span>
					<span className="menu-title">High Momentum</span>
				</ Link>
			</li>
			<li className="nav-item menu-items">
				<Link className="nav-link" to="sectoral-view">
					<span className="menu-icon">
						<i className="mdi mdi-table-large"></i>
					</span>
					<span className="menu-title">Sectoral View</span>
				</ Link>
			</li>
			<li className="nav-item menu-items">
				<Link className="nav-link" to="/live-market">
					<span className="menu-icon">
						<i className="mdi mdi-chart-bar"></i>
					</span>
					<span className="menu-title">Live Market</span>
				</ Link>
			</li>
			<li className="nav-item menu-items">
				<Link className="nav-link" to="/pre-open">
					<span className="menu-icon">
						<i className="mdi mdi-contacts"></i>
					</span>
					<span className="menu-title">Pre Open</span>
				</ Link>
			</li>
			<li className="nav-item menu-items">
				<Link className="nav-link" to="/setup-scripts" aria-expanded="false" aria-controls="auth">
					<span className="menu-icon">
						<i className="mdi mdi-security"></i>
					</span>
					<span className="menu-title">Setup Scripts</span>
				</ Link>
			</li>
		</ul>
	</nav>
}