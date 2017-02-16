import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  color: #555555;
  text-decoration: none;
  font-size: 1.2em;
  padding-bottom: 2px;

  &.active {
    color: #000000;
    border-bottom: solid 3px #000000;
  }

  &:hover {
    color: #000000;
    background-size: 100% 100%;
  }
`;
