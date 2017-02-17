import Article from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

const renderComponent = (props = {}) => shallow(
  <Article {...props} />
);

describe('<Article />', imgSuite);

function imgSuite() {
  it('should render an <article> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is('article')).toBe(true);
  });

  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <Article id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Article>{children}</Article>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
}
