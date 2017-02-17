import styled from 'styled-components';

export default styled.div`
  h1 {
    margin-bottom: -5px;
  }

  h2 {
    font-size: 1em;
    font-weight: normal;
    font-style: italic;
    color: #333333;
  }

  aside {
    background-color: #fefe00;
    color: black;
    font-size: 1em;
    text-align: right;
    float: right;
    margin-top: 5px;
  }

  @media (max-width: 600px) {
    aside {
      display: none;
    }
  }
`;
