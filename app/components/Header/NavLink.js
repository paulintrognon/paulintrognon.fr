import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  color: #555555;
  text-decoration: none;
  font-size: 1.2em;
  padding-bottom: 2px;
  border-bottom: solid 3px #000000;
  transition: color .2s ease-out;

  &:hover {
    color: #000000;
  }
`;
