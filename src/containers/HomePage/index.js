import React from 'react';

import './index.css';
import LoginForm from '../../forms/LoginForm';

const HomePage = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit
      <code>src/App.js</code>
      and save to reload.
    </p>
    <LoginForm onSubmit={(values) => console.log('will console form values', values)} />
  </div>
);

export default HomePage;
