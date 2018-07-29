import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import Routes from './Routes';
import './App.css';

class App extends Component { // eslint-disable-line
  render() {
    return (
      <Router className="App">
        <div>
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/about/aboutWeb">about</Link>
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
