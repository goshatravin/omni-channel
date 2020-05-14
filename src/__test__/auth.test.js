import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Auth } from '../containers/Auth/index';

describe('Auth component', () => {
  let wrapper;
  const props = {
    dispatch: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Auth dispatch={props.dispatch} />);
  });

  it('Should renders correctly', () => {
    expect(render(wrapper)).toMatchSnapshot();
  });
  it('Should be empty by default', () => {
    expect(wrapper.find('.input-form').at(0).prop('value')).toEqual('');
    expect(wrapper.find('.input-form').at(1).prop('value')).toEqual('');
  });
});
