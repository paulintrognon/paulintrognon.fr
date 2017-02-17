import React, { PropTypes } from 'react';

import A from 'components/A';

function AOut(props) {
  return (
    <A href={props.href} target="_blank" className={props.className}>
      {props.children}
    </A>
  );
}

AOut.propTypes = {
  children: React.PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.required,
};

export default AOut;
