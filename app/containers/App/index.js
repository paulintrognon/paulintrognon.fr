/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Header from '../../components/Header';
import Article from './Article';

export default function App(props) {
  return (
    <div>
      <Header pathname={props.location.pathname}></Header>
      <Article>
        {React.Children.toArray(props.children)}
      </Article>
    </div>
  );
}

App.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string,
  }),
  children: React.PropTypes.node,
};
