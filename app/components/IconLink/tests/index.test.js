import IconLink from '../index';

import expect from 'expect';
import { shallow, render } from 'enzyme';
import React from 'react';

const href = 'http://super.link/';
const img = 'img path';
const alt = 'alt';
const children = 'foo bar';
const renderComponent = () => render(
  <IconLink link={href} img={img} alt={alt}>
    {children}
  </IconLink>
);

describe('<IconLink />', () => {
  it('should render an <a>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('a').length).toEqual(1);
    expect(renderedComponent.find('a').first().prop('href')).toEqual(href);
  });

  it('should add href prop', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('a').first().prop('href')).toEqual(href);
  });

  it('should add children', () => {
    const renderedComponent = shallow(
      <IconLink link={href} img={img} alt={alt}>{children}</IconLink>
    );
    expect(renderedComponent.contains(<p className="icon-link-desc">{children}</p>)).toEqual(true);
  });
});
