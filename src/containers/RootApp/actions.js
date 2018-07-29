import {
  ADD_COUNTER,
  MINUS_COUNTER,
} from './constants';

export const addCounter = () => ({
  type: ADD_COUNTER,
});

export const minusCounter = () => ({
  type: MINUS_COUNTER,
});
