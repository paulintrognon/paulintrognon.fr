import React, { PropTypes } from 'react';

import AOut from 'components/AOut';

function AText(props) {
  return (
    <AOut href={props.href} target="_blank" className={`yellow-link ${props.className}`}>
      {props.children}
    </AOut>
  );
}

AText.propTypes = {
  children: PropTypes.string.required,
  className: PropTypes.string,
  href: PropTypes.string.required,
};

export default AText;
