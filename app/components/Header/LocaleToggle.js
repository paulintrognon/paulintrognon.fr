import React from 'react';
import LocaleToggle from 'containers/LocaleToggle';

const style = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};


export default () => (
  <div style={style}>
    <LocaleToggle />
  </div>
);
