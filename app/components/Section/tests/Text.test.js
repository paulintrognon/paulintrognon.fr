import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import Text from '../Text';

describe('<Text />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = render(<Text />);
    expect(renderedComponent.find('div').length).to.equal(1);
  });

  it('should have special styling', () => {
    const renderedComponent = render(<Text />);
    expect(renderedComponent.find('div').first()).to.have.attr('class');
  });
});
