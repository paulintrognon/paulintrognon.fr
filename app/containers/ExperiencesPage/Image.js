import React, { PropTypes } from 'react';

import AOut from 'components/AOut';

function Img(props) {
  return (
    <div>
      <AOut href={props.href}>
        <img className="side-image" src={props.src} alt={props.alt} />
      </AOut>
    </div>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Img;
