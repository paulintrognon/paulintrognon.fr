import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render a header tag', headerTagTest);
});

function headerTagTest() {
  const renderedComponent = shallow(<Wrapper />);
  expect(renderedComponent.type()).toEqual('header');
}
