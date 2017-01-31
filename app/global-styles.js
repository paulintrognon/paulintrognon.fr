import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  * {
    margin:0;
    padding:0;
  }

  body {
    font-family: GidoleRegular, Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  ul {
    margin-left: 30px;
  }
`;
