export const STORE_COLORS = 'STORE_COLORS';
export const STORE_MANUFACTURERS = 'STORE_MANUFACTURERS';
export const SET_FILTER_COLOR = 'SET_FILTER_COLOR';
export const SET_FILTER_MANUFACTURER = 'SET_FILTER_MANUFACTURER';
export const SET_SORT_ORDER_BY_MILEAGE = 'SET_SORT_ORDER_BY_MILEAGE';
export const SET_PAGE = 'SET_PAGE';

export const storeColors = (value) => ({
  type: STORE_COLORS,
  value
});

export const storeManufacturers = (value) => ({
  type: STORE_MANUFACTURERS,
  value
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
