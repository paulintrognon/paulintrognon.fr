import React, { PropTypes } from 'react';

import Img from 'components/Img';
import Wrapper from './Wrapper';

function IconLink(props) {
  return (
    <Wrapper href={props.link}>
      <Img src={props.img} alt={props.alt} />
      <p className="icon-link-desc">{props.children}</p>
    </Wrapper>
  );
}

IconLink.propTypes = {
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default IconLink;
