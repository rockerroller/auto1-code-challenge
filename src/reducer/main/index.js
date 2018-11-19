import initialState from './initialState.json';
import { clone } from 'reducer/utils';
import {
  SET_FETCHING_ON,
  SET_FETCHING_OFF,
  SET_FILTER_COLOR,
  SET_FILTER_MANUFACTURER,
  SET_SORT_ORDER_BY_MILEAGE,
  SET_PAGE,
  SET_CARS,
  SET_TOTAL_PAGE_COUNT
} from 'actions/main';

export default function main(state = initialState, action) {
  let newState = clone(state);
  switch (action.type) {
    case SET_FETCHING_ON:
      newState.isFetching = true;
      return newState;
    case SET_FETCHING_OFF:
      newState.isFetching = false;
      return newState;
    case SET_FILTER_COLOR:
      newState.filter.color = action.value;
      return newState;
    case SET_FILTER_MANUFACTURER:
      newState.filter.manufacturer = action.value;
      return newState;
    case SET_SORT_ORDER_BY_MILEAGE:
      newState.sort = action.value;
      return newState;
    case SET_PAGE:
      newState.page = action.value;
      return newState;
    case SET_CARS:
      newState.cars = action.value;
      return newState;
    case SET_TOTAL_PAGE_COUNT:
      newState.totalPageCount = action.value;
      return newState;
    default: return state;
  }
}
