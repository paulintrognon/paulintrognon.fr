import React from 'react';

import Img from './Img';
import Text from './Text';
import Wrapper from './Wrapper';

function List(props) {
  return (
    <Wrapper>
      {props.img ? <Img src={props.img} alt={props.alt} /> : ''}
      <Text>
        {props.children}
      </Text>
    </Wrapper>
  );
}

List.propTypes = {
  img: React.PropTypes.string,
  alt: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default List;
