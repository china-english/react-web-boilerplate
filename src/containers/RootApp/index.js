import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavigationBar from '../../components/NavigationBar';
import Routes from '../../Routes';
import {
  addCounter,
  minusCounter,
} from './actions';
import './styles.css';

const RootApp = (props) => {
  const { count, addCount, minusCount } = props;
  return (
    <Router className="root-app">
      <div className="app">
        <NavigationBar />
        {count}
        <button type="button" onClick={() => addCount()}>加</button>
        <button type="button" onClick={() => minusCount()}>减</button>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/about/aboutWeb">about</Link>
        <Routes />
      </div>
    </Router>
  );
};

RootApp.defaultProps = {
  count: 0,
  addCount: () => null,
  minusCount: () => null,
};

RootApp.propTypes = {
  count: PropTypes.number,
  addCount: PropTypes.func,
  minusCount: PropTypes.func,
};

const mapStateToProps = (state) => ({
  count: state.app.count,
});

const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(addCounter()),
  minusCount: () => dispatch(minusCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootApp);
