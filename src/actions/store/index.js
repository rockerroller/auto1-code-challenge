import { get } from 'utils/request';
export const STORE_COLORS = 'STORE_COLORS';
export const STORE_MANUFACTURERS = 'STORE_MANUFACTURERS';

export const storeColors = (value) => ({
  type: STORE_COLORS,
  value
});

export const storeManufacturers = (value) => ({
  type: STORE_MANUFACTURERS,
  value
});

export function fetchColors() {
  return async (dispatch) => {
    const result = await get('colors');
    dispatch(storeColors(result.colors));
  }
}

export function fetchManufacturers() {
  return async (dispatch) => {
    const result = await get('manufacturers' );
    dispatch(storeManufacturers(result.manufacturers));
  }
}
