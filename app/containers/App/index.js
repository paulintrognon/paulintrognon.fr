/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';

const Body = styled.div`
  margin-top: 150px;
`;

export default function App(props) {
  return (
    <div>
      <Header pathname={props.location.pathname}></Header>
      <Body>
        {React.Children.toArray(props.children)}
      </Body>
    </div>
  );
}

App.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string,
  }),
  children: React.PropTypes.node,
};
