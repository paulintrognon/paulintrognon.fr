import expect from 'expect';
import { shallow, render } from 'enzyme';
import React from 'react';

import Footer from '../index';
import Wrapper from '../Wrapper';

describe('<Footer />', () => {
  it('should render a Wrapper', wrapperTest);
  it('should render a footer', footerTest);
});

function wrapperTest() {
  const renderedComponent = shallow(<Footer />);
  expect(renderedComponent.find(Wrapper).length).toEqual(1);
}

function footerTest() {
  const renderedComponent = render(<Footer />);
  expect(renderedComponent.find('footer').length).toEqual(1);
}
