import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class LoginPage extends Component { // eslint-disable-line
  render() {
    return (
      <div className="App">
        {window.setHelmet({ title: 'LoginPage' })}
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>LoginPage</h1>
        <Link to="/about/aboutWeb">about</Link>
        <p className="App-intro">
          About To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default LoginPage;
