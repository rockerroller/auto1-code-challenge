export const STORE_COLORS = 'STORE_COLORS';
export const STORE_MANUFACTURERS = 'STORE_MANUFACTURERS';
export const SET_FILTER_COLOR = 'SET_FILTER_COLOR';
export const SET_FILTER_MANUFACTURER = 'SET_FILTER_MANUFACTURER';

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
