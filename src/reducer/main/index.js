import initialState from './initialState.json';
import { clone } from 'reducer/utils';
import {
  STORE_COLORS,
  STORE_MANUFACTURERS,
  SET_FILTER_COLOR,
  SET_FILTER_MANUFACTURER
} from 'actions/main';

export default function app(state = initialState, action) {
  let newState = clone(state);
  switch (action.type) {
    case STORE_COLORS:
      newState.store.colors = action.value;
      return newState;
    case STORE_MANUFACTURERS:
      newState.store.manufacturers= action.value;
      return newState;
    case SET_FILTER_COLOR:
      newState.filter.color = action.value;
      return newState;
    case SET_FILTER_MANUFACTURER:
      newState.filter.manufacturer = action.value;
      return newState;
    default: return state;
  }
}
