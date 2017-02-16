/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const A = styled.a`
  color: black;
  text-decoration: underline;
  background-image: linear-gradient(to bottom, transparent 0%, transparent 15%, #fefe00 0%, #fefe00 85%, transparent 85%, transparent 100%);
  background-size: 0 100%;
  transition: background-size 225ms ease;

  &:hover {
    color: black;
    background-size: 100% 100%;
  }
`;

export default A;
