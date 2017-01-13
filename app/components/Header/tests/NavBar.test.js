import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('should render a header tag', headerTagTest);
});

function headerTagTest() {
  const renderedComponent = shallow(<NavBar />);
  expect(renderedComponent.type()).toEqual('nav');
}
