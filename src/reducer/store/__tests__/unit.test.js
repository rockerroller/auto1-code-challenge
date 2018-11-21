import initialState from '../initialState.json';
import reducer from '../';
import * as actions from 'actions/store';

describe('store reducer', () => {

  it('sould return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle the STORE_COLORS', () => {
    const colors =  ['red', 'blue', 'green'];
    const state = Object.assign({}, initialState);
    const expectedState = Object.assign({}, state, { colors });
    expect(reducer(state, actions.storeColors(colors))).toEqual(expectedState);
  });

  it('should store the manufacturer list', () => {
    const manufacturers = [{ name: 'Audi' }, { name: 'BMW' }]
    const state = Object.assign({}, initialState);
    const expectedState = Object.assign({}, state, { manufacturers });
    expect(reducer(state, actions.storeManufacturers(manufacturers))).toEqual(expectedState);
  });

  it('should toogle the favourite car', () => {
    const stockNumber1 = 10011;
    const stockNumber2 = 10022;
    const state = Object.assign({}, initialState);
    const expectedState = {
      favourite: {
        [stockNumber2]: true
      }
    };
    let newState = null;
    newState = reducer(newState, actions.toggleFavourite(stockNumber1));
    newState = reducer(newState, actions.toggleFavourite(stockNumber2));
    newState = reducer(newState, actions.toggleFavourite(stockNumber1));
    expect(newState).toEqual(expectedState);
  });
});
