import { shallow } from 'enzyme';
import * as React from 'react';
import LoginComponent from '../components/LoginComponent';

describe('Test Login component', () => {
  let wrapper: any;
  const props = {
    login: 'login',
    password: 'password',
    changePassword: () => {},
    changeLogin: () => {},
    handleSubmit: () => {},
    error: false
  };
  beforeEach(() => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper = shallow(<LoginComponent {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('inputSubmit')).toHaveLength(1);
    expect(wrapper.find('input').at(0).prop('value')).toEqual('login');
    expect(wrapper.find('input').at(1).prop('value')).toEqual('password');
  });
});
