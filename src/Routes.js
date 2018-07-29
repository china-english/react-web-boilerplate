import React from 'react';
import {
  Route,
} from 'react-router-dom';

import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import AboutPage from './containers/AboutPage';

const Routes = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={LoginPage} />
    <Route path="/about/:id" component={AboutPage} />
  </div>
);

export default Routes;
