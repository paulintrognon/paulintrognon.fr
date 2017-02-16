import AOut from '../index';
import A from 'components/A';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

const href = 'test';
const renderComponent = (props = {}) => shallow(
  <AOut href={href} {...props} />
);

describe('<AOut />', imgSuite);

function imgSuite() {
  it('should render an <A> tag', renderATagTest);
  it('should have an href attribute', hrefTagTest);
  it('should not have a className attribute', noClassNameTest);
  it('should adopt a className attribute', classNameTest);
  it('should put children in Text', renderChildrenTest);
}

function renderATagTest() {
  const renderedComponent = renderComponent();
  expect(renderedComponent.is(A)).toBe(true);
}

function hrefTagTest() {
  const renderedComponent = renderComponent();
  expect(renderedComponent.prop('href')).toEqual(href);
}

function noClassNameTest() {
  const renderedComponent = renderComponent();
  expect(renderedComponent.prop('className')).toNotExist();
}

function classNameTest() {
  const className = 'test';
  const renderedComponent = renderComponent({ className });
  expect(renderedComponent.hasClass(className)).toBe(true);
}

function renderChildrenTest() {
  const children = <div></div>;
  const renderedComponent = shallow(<AOut>{children}</AOut>);
  expect(renderedComponent.contains(children)).toEqual(true);
}
