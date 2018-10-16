import React from 'react';

import LoginForm from '../../forms/LoginForm';
import './style.scss';

const HomePage = () => (
  <div className="app">
    <header className="app-header">
      <h1 className="app-title">Welcome to React</h1>
    </header>
    <p className="app-intro">
      To get started, edit
      <code>src/App.js</code>
      and save to reload.
    </p>
    <LoginForm onSubmit={(values) => console.log('will console form values', values)} />
  </div>
);

export default HomePage;
