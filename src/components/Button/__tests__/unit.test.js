import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Button from '../';

Enzyme.configure({ adapter: new Adapter() });

function getComponent() {
  const props = {
    children: 'Test',
    onClick: sinon.spy()
  }
  const wrapper = shallow(<Button { ...props } />);

  return { props, wrapper };
}

describe('Button', () => {

  it('should render self', () => {
    const { props, wrapper } = getComponent();

    const button = wrapper.find('button');
    expect(button.hasClass('button-default')).toBe(true);
    expect(button.props().children).toBe(props.children);

    button.simulate('click');
    button.simulate('click');
    expect(props.onClick.callCount).toBe(2);
  });
});

