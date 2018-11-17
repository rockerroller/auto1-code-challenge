import initialState from './initialState.json';
import { clone } from 'reducer/utils';
import {
  STORE_COLORS,
  STORE_MANUFACTURERS,
} from 'actions/store';

export default function app(state = initialState, action) {
  let newState = clone(state);
  switch (action.type) {
    case STORE_COLORS:
      newState.colors = action.value;
      return newState;
    case STORE_MANUFACTURERS:
      newState.manufacturers= action.value;
      return newState;
    default: return state;
  }
}
