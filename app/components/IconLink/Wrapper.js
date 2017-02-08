import styled from 'styled-components';

import A from 'components/A';

const Wrapper = styled(A)`
  display: inline-block;
  width: 150px;
  margin-right: 25px;
  margin-left: 25px;
  margin-top: 50px;

  img {
    width: 50px;
  }

  .icon-link-desc {
    color: white;
    transition: color .2s ease-out;
  }

  &:hover .icon-link-desc {
    color: #105b7c;
  }
`;

export default Wrapper;
