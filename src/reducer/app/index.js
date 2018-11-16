import initialState from './initialState.json';
import { clone } from 'reducer/utils';
import { SET_LOADING_ON, SET_LOADING_OFF } from 'actions/app';

export default function app(state = initialState, action) {
  let newState = clone(state);
  switch (action.type) {
    case SET_LOADING_ON:
      newState.isLoading = true;
      return newState;
    case SET_LOADING_OFF:
      newState.isLoading = false;
      return newState;
    default: return state;
  }
}
