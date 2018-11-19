import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Filter } from '../';

Enzyme.configure({ adapter: new Adapter() });

function getComponent() {
  const props = {
    colors: ['red', 'blue', 'green'],
    manufacturers: [{ name: 'Audi' }, { name: 'BMW' }]
  };
  const wrapper =  shallow(<Filter { ...props } />)
  return { props, wrapper };
}

describe('Filter', () => {

  it('should render self and inner components', () => {
    const { wrapper } = getComponent();

    const button = wrapper.find('Button');
    expect(button.hasClass('button')).toBe(true);
    expect(button.props().children).toBe('Filter');

    const labelledSelects = wrapper.find('LabelledSelect');
    expect(labelledSelects).toHaveLength(2);

  });
});

