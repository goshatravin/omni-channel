import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { Dashboard } from '../containers/Omni';

// const useEffect = jest.spyOn(React, 'useEffect').mockImplementation(() => {});
describe('test omni container', () => {
  const storeq = {
    ticket: {},
    ticketIsLoading: false,
    referenceIsLoading: false,
    reference: [],
  };

  it('should render main pages with props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Dashboard {...storeq} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('should render main pages without props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Dashboard />);
    const result = renderer.getRenderOutput();
    expect(result.props.children).toEqual('loading');
    expect(result).toMatchSnapshot();
  });
});

// !ticketIsLoading && !referenceIsLoading && ticket && reference;
