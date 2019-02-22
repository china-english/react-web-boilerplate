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
  return (
    <header className="navigation-bar">
      <div className="navigation-bar-content">
        <div className="bar-left">
          <Link className="logo-link" to="/">
            <img alt="logo" src={logoImage} className="logo" />
          </Link>
        </div>

        <div className="bar-right">
          {MENU_BUTTON_LABEL.map((menuLabel, index) => menuButton(menuLabel, index)) }
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
