import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './logo';
import { appConfig } from '../../service/app-config';

const Menu = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  const activeLink = `/${splitLocation[1]}`;

  return appConfig.map(({ routeName, title, icon, subRoutes }, index) => {
    if (subRoutes) {
      const subItem = subRoutes.map(({ routeName, title }) => (
        <li key={routeName} className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            to={routeName}
          >
            {title}
          </NavLink>
        </li>
      ));

      const activeItem = subRoutes.findIndex(
        ({ routeName }) => routeName === activeLink
      );

      return (
        <li
          className={
            activeItem > -1
              ? 'nav-item menu-items active'
              : 'nav-item menu-items'
          }
          key={title + index}
        >
          <NavLink
            className="nav-link"
            data-toggle="collapse"
            to={subRoutes[0].routeName}
          >
            <span className="menu-icon">
              <i className={`mdi ${icon}`}></i>
            </span>
            <span className="menu-title">{title}</span>
            <i className="menu-arrow"></i>
          </NavLink>
          <div className={activeItem > -1 ? 'collapse show' : 'collapse'}>
            <ul className="nav flex-column sub-menu">{subItem}</ul>
          </div>
        </li>
      );
    } else {
      return (
        <li
          className={
            activeLink === routeName
              ? 'nav-item menu-items active'
              : 'nav-item menu-items'
          }
          key={routeName}
        >
          <NavLink className="nav-link" to={routeName}>
            <span className="menu-icon">
              <i className={`mdi ${icon}`}></i>
            </span>
            <span className="menu-title">{title}</span>
          </NavLink>
        </li>
      );
    }
  });
};

export const Sidebar = (props) => {
  const { isMenuOpen } = props;
  return (
    <nav
      className={
        isMenuOpen
          ? 'sidebar sidebar-offcanvas active'
          : 'sidebar sidebar-offcanvas'
      }
      id="sidebar"
    >
      <Logo />
      <ul className="nav">
        <Menu />
      </ul>
    </nav>
  );
};
