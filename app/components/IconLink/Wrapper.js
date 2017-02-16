import styled from 'styled-components';

import AOut from 'components/AOut';

const Wrapper = styled(AOut)`
  text-decoration: none;
  display: inline-block;
  width: 150px;
  margin-right: 25px;
  margin-left: 25px;
  margin-top: 75px;
  background-color: white;
  transition: background-color .2s ease-out;
  padding-top: 15px;
  padding-bottom: 10px;
  border-radius: 10px;

  img {
    width: 50px;
  }

  .icon-link-desc {
    color: white;
    transition: color .2s ease-out;
  }

  &:hover {
    background-color: #fefe00;
  }

  &:hover .icon-link-desc {
    color: black;
  }
`;

export default Wrapper;
