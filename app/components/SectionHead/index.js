import React from 'react';

import Wrapper from './Wrapper';

export default function SectionHead(props) {
  return (
    <Wrapper>
      {props.side ? <aside>{props.side}</aside> : '' }
      <h1>{props.title}</h1>
      <h2>{props.subtitle ? props.subtitle : <span>&nbsp;</span> }</h2>
    </Wrapper>
  );
}

SectionHead.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  side: React.PropTypes.string,
};
