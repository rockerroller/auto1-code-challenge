import { get } from 'utils/request';
export const SET_FETCHING_ON = 'SET_FETCHING_ON';
export const SET_FETCHING_OFF = 'SET_FETCHING_OFF';
export const SET_FILTER_COLOR = 'SET_FILTER_COLOR';
export const SET_FILTER_MANUFACTURER = 'SET_FILTER_MANUFACTURER';
export const SET_SORT_ORDER_BY_MILEAGE = 'SET_SORT_ORDER_BY_MILEAGE';
export const SET_PAGE = 'SET_PAGE';
export const SET_CARS = 'SET_CARS';
export const SET_TOTAL_PAGE_COUNT = 'SET_TOTAL_PAGE_COUNT';

export const setFetchingOn = () => ({
  type: SET_FETCHING_ON
});

export const setFetchingOff = () => ({
  type: SET_FETCHING_OFF
});

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

export const setTotalPageCount = (value) => ({
  type: SET_TOTAL_PAGE_COUNT,
  value
});


export function fetchCars() {
  return async (dispatch, getState) => {
    dispatch(setFetchingOn());
    const state= getState();
    const { filter, sort, page } = state.main;
    const params = {
      manufacturer: filter.manufacturer,
      color: filter.color,
      sort,
      page
    };
    const result = await get('cars', params);
    //dispatch(setFetchingOff());
    dispatch(setCars(result.cars));
    dispatch(setTotalPageCount(result.totalPageCount));
    if (page > result.totalPageCount) {
      dispatch(setPage(result.totalPageCount));
      dispatch(fetchCars());
    }
  }
}
