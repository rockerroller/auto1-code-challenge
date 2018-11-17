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
