import React from 'react';
// import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { Auth } from '../containers/Auth/index';

describe('Auth component', () => {
  const props = {
    dispatch: jest.fn(),
  };
  const onSubmitMock = jest.fn();
  const wrapper = mount(<Auth props={props.dispatch} onSubmit={onSubmitMock} />);
  // console.log(wrapper.debug());

  it('Should be logo on pages', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });
  it('Should change value', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'goshatravin' } });
    expect(wrapper.find('input').at(0).prop('value')).toEqual('goshatravin');
    wrapper.find('input').at(1).simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input').at(1).prop('value')).toEqual('password');
  });
  // it('Should login function start', () => {
  //   wrapper.find('input').at(0).simulate('change', { target: { value: 'kek' } });
  //   wrapper.find('input').at(1).simulate('change', { target: { value: 'vorobek' } });
  //   wrapper.find('button').simulate('click');
  //   // console.log(wrapper.find('button').debug());
  //   // expect(wrapper.find('button').prop('type')).toEqual('submit');
  //   expect(onSubmitMock).toBeCalled();
  // });
  // it('should submit form', () => {
  //   const qwerty = wrapper.find('form').simulate('submit');
  // });
});
