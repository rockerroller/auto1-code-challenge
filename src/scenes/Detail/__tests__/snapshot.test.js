import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Detail } from '../';

Enzyme.configure({ adapter: new Adapter() });

function getComponent(isLoading) {
  const props = {
    isLoading,
    car: { stockNumber: 10011 },
    match: { params: { id: 10011 } }
  };
  const wrapper =  shallow(<Detail { ...props } />)
  return { props, wrapper };
}

describe('Detail', () => {

  it('should match snapshot', () => {
    const { props, wrapper } = getComponent(true);

    expect(wrapper).toMatchSnapshot();
  });
});

