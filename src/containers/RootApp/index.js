import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import NavigationBar from 'components/NavigationBar';
import GlobalFooter from 'components/GlobalFooter';

import Routes from 'src/Routes';

import {
  addCounter,
  minusCounter,
} from './actions';
import './styles.scss';

window.setHelmet = (params) => <Helmet {...params} />;

const RootApp = (props) => {
  const { count, addCount, minusCount } = props;
  console.log(count, addCount, minusCount);
  return (
    <Router>
      <div className="app-container">
        <NavigationBar />
        <div className="app-content">
          <Routes />
          {/* {count}
          <button type="button" onClick={() => addCount()}>加</button>
          <button type="button" onClick={() => minusCount()}>减</button> */}
        </div>
        <GlobalFooter />
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
