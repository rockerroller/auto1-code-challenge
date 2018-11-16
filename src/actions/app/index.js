export const SET_LOADING_ON = 'SET_LOADING_ON';
export const SET_LOADING_OFF = 'SET_LOADING_OFF';

export const loading = () => ({
  type: SET_LOADING_ON
});

export const ready = () => ({
  type: SET_LOADING_OFF
});
