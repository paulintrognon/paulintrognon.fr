import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  float: left;
  margin-top: 10px;
  margin-left: 0px;
  margin-right: 30px;
  margin-bottom: 10px;
  width: 80px;

  @media (max-width: 600px) {
    width: 50px;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 10px;
    margin-bottom: 0px;
  }
`;

export default Img;
