import initialState from './initialState.json';
import { clone } from 'reducer/utils';
import {
  STORE_COLORS,
  STORE_MANUFACTURERS,
  TOGGLE_FAVOURITE
} from 'actions/store';

export default function app(state = initialState, action) {
  let newState = clone(state);
  switch (action.type) {
    case STORE_COLORS:
      newState.colors = action.value;
      return newState;

    case STORE_MANUFACTURERS:
      newState.manufacturers = action.value;
      return newState;

    case TOGGLE_FAVOURITE:
      let favourite = clone(newState.favourite);
      if (favourite[action.value]) {
        delete favourite[action.value];
      } else {
        favourite[action.value] = true;
      }
      newState.favourite = favourite;
      return newState;

    default: return state;
  }
}
