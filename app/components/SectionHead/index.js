import React from 'react';

import Wrapper from './Wrapper';

export default function SectionHead(props) {
  return (
    <Wrapper>
      {props.side ? <aside>{props.side}</aside> : '' }
      <h1>{props.title}</h1>
      {props.subtitle ? <h2>{props.subtitle}</h2> : <h2 style={{ fontSize: '5px' }}>&nbsp;</h2> }
    </Wrapper>
  );
}

SectionHead.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  side: React.PropTypes.string,
};
