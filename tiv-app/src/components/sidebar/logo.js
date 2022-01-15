import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
    <Link id="logo" className="sidebar-brand brand-logo" to="/">
      Trading in Veins
    </Link>
    <Link id="logo-min" className="sidebar-brand brand-logo-mini" to="/">
      TIV
    </Link>
  </div>
);

export default Logo;
