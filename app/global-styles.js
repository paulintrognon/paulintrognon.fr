import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    width: 100%;
    height: 100%;
  }

  * {
    margin:0;
    padding:0;
  }

  body {
    font-family: CarlitoRegular, Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  ul {
    margin-left: 15px;
  }

  .yellow-link {
    background-image: linear-gradient(to bottom, transparent 0%, transparent 15%, #fefe00 0%, #fefe00 85%, transparent 85%, transparent 100%);
    background-size: 0% 100%;
    transition: background-size 225ms ease;
  }

  .yellow-link:hover {
    background-size: 100% 100%;
  }
`;
