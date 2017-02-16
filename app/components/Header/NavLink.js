import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  color: #555555;
  text-decoration: none;
  font-size: 1.2em;
  padding-bottom: 2px;
  transition: color .2s ease-out;
  background-image: linear-gradient(to bottom, transparent 0%, transparent 15%, #fefe00 0%, #fefe00 85%, transparent 85%, transparent 100%);
  background-size: 0 100%;
  transition: background-size 225ms ease;

  &.active {
    color: #000000;
    border-bottom: solid 3px #000000;
  }

  &:hover {
    color: #000000;
    background-size: 100% 100%;
  }
`;
