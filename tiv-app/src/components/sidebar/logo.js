import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
    <Link id="logo" className="sidebar-brand brand-logo" to="/app">
      <img src="/img/tiv-logo.png" alt="Trading in Veins"></img>
    </Link>
    <Link id="logo-min" className="sidebar-brand brand-logo-mini" to="/app">
      TIV
    </Link>
  </div>
);

export default Logo;
