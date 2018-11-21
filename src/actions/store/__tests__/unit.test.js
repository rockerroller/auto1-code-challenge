import * as actions from '../';

describe('store actions', () => {

  it('should store the color list', () => {
    const colors =  ['red', 'blue', 'green'];
    const expectedAction = {
      type: actions.STORE_COLORS,
      value: colors
    }
    expect(actions.storeColors(colors)).toEqual(expectedAction);
  });

  it('should store the manufacturer list', () => {
    const manufacturers = [{ name: 'Audi' }, { name: 'BMW' }]
    const expectedAction = {
      type: actions.STORE_MANUFACTURERS,
      value: manufacturers
    }
    expect(actions.storeManufacturers(manufacturers)).toEqual(expectedAction);
  });

  it('should toogle the favourite car', () => {
    const value = 10033;
    const expectedAction = {
      type: actions.TOGGLE_FAVOURITE,
      value
    }
    expect(actions.toggleFavourite(value)).toEqual(expectedAction);
  });
});
