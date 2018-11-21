import initialState from './initialState.json';
import { clone } from 'reducer/utils';
import {
  STORE_COLORS,
  STORE_MANUFACTURERS,
  TOGGLE_FAVOURITE
} from 'actions/store';

export default function store(state = initialState, action) {
  let newState = clone(state);
  switch (action.type) {
    case STORE_COLORS:
      return { ...state, colors: action.value };

    case STORE_MANUFACTURERS:
      return { ...state, manufacturers: action.value };

    case TOGGLE_FAVOURITE:
      // The toggle favourite action is handling favourites in
      // hashmap due to performance considerations when there
      // is a huge amount of favourites
      let favourite = clone(newState.favourite);
      if (favourite[action.value]) {
        delete favourite[action.value];
      } else {
        favourite[action.value] = true;
      }
      return { ...state, favourite };

    default: return state;
  }
}
