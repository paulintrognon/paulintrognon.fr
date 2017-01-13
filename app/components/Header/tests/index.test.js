import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Header from '../index';
import Wrapper from '../Wrapper';

describe('<Header />', () => {
  it('should render a Wrapper', wrapperTest);
});

function wrapperTest() {
  const renderedComponent = shallow(<Header />);
  expect(renderedComponent.find(Wrapper).length).toEqual(1);
}
