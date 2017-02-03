import React from 'react';

import Img from './Img';
import Wrapper from './Wrapper';

function List(props) {
  return (
    <Wrapper>
      {props.img ? <Img src={props.img} alt={props.alt} /> : ''}
      {props.children}
    </Wrapper>
  );
}

List.propTypes = {
  children: React.PropTypes.node,
};

export default List;
