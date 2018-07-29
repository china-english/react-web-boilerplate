import { combineReducers } from 'redux';

import {
  ADD_COUNTER,
  MINUS_COUNTER,
} from '../containers/RootApp/constants';

const initialState = {
  test: '',
  count: 0,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case MINUS_COUNTER:
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});
