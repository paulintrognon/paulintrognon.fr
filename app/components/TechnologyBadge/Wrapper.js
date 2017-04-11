import styled from 'styled-components';

const Wrapper = styled.p`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 5px;

  img {
    width: 25px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    min-width: 125px;
  }
`;

export default Wrapper;
