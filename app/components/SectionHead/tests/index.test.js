import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import SectionHead from '../index';
import Wrapper from '../Wrapper';

describe('<SectionHead />', () => {
  it('should render a Wrapper', wrapperTest);
  it('should render an aside if given', renderAsideTest);
  it('should render an h2 if given', renderH2Test);
});

function wrapperTest() {
  const renderedComponent = shallow(<SectionHead title="title" />);
  expect(renderedComponent.find(Wrapper).length).toEqual(1);
  expect(renderedComponent.find('aside').length).toEqual(0);
  expect(renderedComponent.contains(<h2><span>&nbsp;</span></h2>)).toEqual(true);
}

function renderAsideTest() {
  const side = 'super side';
  const renderedComponent = shallow(<SectionHead title="title" side={side} />);
  expect(renderedComponent.find('aside').length).toEqual(1);
}

function renderH2Test() {
  const subtitle = 'super subtitle';
  const renderedComponent = shallow(<SectionHead title="title" subtitle={subtitle} />);
  expect(renderedComponent.find('aside').length).toEqual(0);
  expect(renderedComponent.contains(<h2>{subtitle}</h2>)).toEqual(true);
}
