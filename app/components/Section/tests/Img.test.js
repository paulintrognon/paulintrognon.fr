import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';

import Img from '../Img';
import NormalImg from 'components/Img';

describe('<Img />', () => {
  it('should render an <img> tag', () => {
    const renderedComponent = shallow(<Img />);
    expect(renderedComponent.find(NormalImg).length).to.equal(1);
  });

  it('should have special styling', () => {
    const renderedComponent = render(<Img alt="alt" src="src" />);
    expect(renderedComponent.find('img').first()).to.have.attr('class');
  });
});
