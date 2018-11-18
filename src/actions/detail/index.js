import { get } from 'utils/request';
export const SET_FETCHING_ON = 'SET_FETCHING_ON';
export const SET_FETCHING_OFF = 'SET_FETCHING_OFF';
export const SET_CAR = 'SET_CAR';

export const setFetchingOn = () => ({
  type: SET_FETCHING_ON
});

export const setFetchingOff = () => ({
  type: SET_FETCHING_OFF
});

export const setCar = (value) => ({
  type: SET_CAR,
  value
});

export function fetchCar(stockNumber) {
  return async (dispatch, getState) => {
    dispatch(setFetchingOn());
    const result = await get(`cars/${stockNumber}`);
    dispatch(setFetchingOff());
    dispatch(setCar(result.car));
  }
}
