import React from 'react';
import {
  Link,
} from 'react-router-dom';
import classNames from 'classnames';

import logoImage from 'src/logo.png';

import { MENU_BUTTON_LABEL } from './constants';
import './style.scss';

const NavigationBar = () => {
  const menuButton = (item, index) => {
    const buttonClasses = classNames({
      'menu-button': true,
      'last-button': index === MENU_BUTTON_LABEL.length - 1,
    });
    return (
      <Link
        to={item.path}
        key={item.key}
        className={buttonClasses}
        onClick={() => console.log(item)}
      >
        {item.label}
      </Link>
    );
  };
  const renderAllBarRight = () => (
    <div className="all-bar-right">
      { MENU_BUTTON_LABEL.map((menuLabel, index) => menuButton(menuLabel, index)) }
    </div>
  );
  const renderOmitBarRight = () => (
    <div className="omit-bar-right">
      <Link
        to="./home"
        className="menu-button"
        onClick={() => console.log('菜单')}
      >
        菜单
      </Link>
    </div>
  );
  const renderBarRight = () => (
    <div className="bar-right">
      {renderAllBarRight()}
      {renderOmitBarRight()}
    </div>
  );

  return (
    <header className="navigation-bar">
      <div className="navigation-bar-content">
        <div className="bar-left">
          <Link className="logo-link" to="/">
            <img alt="logo" src={logoImage} className="logo" />
          </Link>
        </div>
        {renderBarRight()}
      </div>
    </header>
  );
};

export default NavigationBar;
