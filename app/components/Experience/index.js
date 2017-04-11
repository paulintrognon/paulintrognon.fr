import styled from 'styled-components';

export default styled.div`
  padding: 15px;
  margin-bottom: 40px;

  h1 {
    margin-top: -5px;
  }

  h2 {
    margin-bottom: 3px;
  }

  img.side-image {
    float: left;
    border: 1px solid #888;
    width: 400px;
    max-width: 50%;
    margin-right: 20px;
  }

  .technology-container {
    margin-top: 5px;
    margin-bottom: 15px;
  }

  ul {
    margin-top: 10px;
    margin-left: 7px;
  }

  ul li {
    list-style-type: none;
  }

ul li:before {
  content: "-";
  margin-right: 5px;
}

  @media (max-width: 480px) {
    img.side-image {
      width: 100%;
      max-width: 100%;
      float: none;
    }

    h1 {
      margin-top: 10px;
    }
  }
`;
