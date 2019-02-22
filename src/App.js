import React from 'react';
import { Provider } from 'react-redux';

import RootApp from 'containers/RootApp';

import store from './store';

const App = () => (
  <Provider store={store}>
    <RootApp />
  </Provider>
);

export default App;
