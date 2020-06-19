import { shallow } from 'enzyme';
import * as React from 'react';
import OmniSearchComponent from '../components/OmniSearchComponent';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest-styled-components';

describe('Test Omni Component', () => {
  let wrapper: any;
  const props = {
    searchValue: '',
    currentBtn: '',
    setValue: jest.fn(),
    switchBtn: jest.fn()
  };
  beforeEach(() => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper = shallow(<OmniSearchComponent {...props} />);
  });
  it('should render correctly', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(3);
  });
  it('shoud have empty filed', () => {
    expect(wrapper.find('input').at(0).prop('value')).toEqual('');
  });
  it('should find all button without active label', () => {
    expect(wrapper.find('button').at(0).prop('name')).toEqual('');
    expect(wrapper.find('button').at(1).prop('name')).toEqual('');
    expect(wrapper.find('button').at(2).prop('name')).toEqual('');
  });
  it('should trigger function after click at button', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(props.switchBtn).toHaveBeenCalled();
  });
  it('should trigger function  after input change', () => {
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'abc' } });
    expect(props.setValue).toHaveBeenCalled();
  });
  it('should change value after change event', () => {
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'abc' } });
    expect(props.setValue).toBeCalledWith('abc');
  });
  it('should change value after btn click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(props.switchBtn).toBeCalledWith('1', 'Мои');
  });
  it('should not  have active btn', () => {
    expect(wrapper.find('button').at(0)).toHaveStyleRule('background', 'white');
    expect(wrapper.find('button').at(1)).toHaveStyleRule('background', 'white');
    expect(wrapper.find('button').at(2)).toHaveStyleRule('background', 'white');
  });
});
