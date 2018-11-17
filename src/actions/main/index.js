import { get } from 'utils/request';
export const SET_FILTER_COLOR = 'SET_FILTER_COLOR';
export const SET_FILTER_MANUFACTURER = 'SET_FILTER_MANUFACTURER';
export const SET_SORT_ORDER_BY_MILEAGE = 'SET_SORT_ORDER_BY_MILEAGE';
export const SET_PAGE = 'SET_PAGE';
export const SET_CARS = 'SET_CARS';

export const setFilterColor = (value) => ({
  type: SET_FILTER_COLOR,
  value
});

export const setFilterManufacturer = (value) => ({
  type: SET_FILTER_MANUFACTURER,
  value
});

export const setSortOrderByMileage = (value) => ({
  type: SET_SORT_ORDER_BY_MILEAGE,
  value
});

export const setPage = (value) => ({
  type: SET_PAGE,
  value
});

export const setCars = (value) => ({
  type: SET_CARS,
  value
});

export function fetchCars() {
  return async (dispatch, getState) => {
    const state= getState();
    const { filter, sort, page } = state.main;
    const params = {
      manufacturer: filter.manufacturer,
      color: filter.color,
      sort,
      page
    };
    const { cars } = await get('cars', params);
    dispatch(setCars(cars));
  }
}
