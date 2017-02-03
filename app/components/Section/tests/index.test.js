import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Img from '../Img';
import Text from '../Text';
import Section from '../index';
import Wrapper from '../Wrapper';

describe('<Section />', () => {
  it('should render a Wrapper', wrapperTest);
  it('should put children in Text', renderTextTest);
  it('should render an img if given', renderImgTest);
});

function wrapperTest() {
  const renderedComponent = shallow(<Section />);
  expect(renderedComponent.find(Wrapper).length).toEqual(1);
  expect(renderedComponent.find(Img).length).toEqual(0);
}

function renderTextTest() {
  const children = 'children';
  const renderedComponent = shallow(<Section>{children}</Section>);
  expect(renderedComponent.contains(<Text>{children}</Text>)).toEqual(true);
}

function renderImgTest() {
  const renderedComponent = shallow(<Section img="lol" />);
  expect(renderedComponent.find(Img).length).toEqual(1);
}
