import initialState from './initialState.json';
import { clone } from 'reducer/utils';
import {
  SET_FETCHING_ON,
  SET_FETCHING_OFF,
  SET_CAR,
} from 'actions/detail';

export default function app(state = initialState, action) {
  let newState = clone(state);
  switch (action.type) {
    case SET_FETCHING_ON:
      newState.isFetching = true;
      return newState;
    case SET_FETCHING_OFF:
      newState.isFetching = false;
      return newState;
    case SET_CAR:
      newState.car = action.value;
      return newState;
    default: return state;
  }
}
