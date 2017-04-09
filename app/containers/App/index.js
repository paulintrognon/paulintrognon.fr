/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import Body from './Body';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function App(props) {
  return (
    <div>
      <Header pathname={props.location.pathname}></Header>
      <Helmet
        title="Freelance Full Stack Developper, Lyon"
        titleTemplate="Paulin Trognon – %s"
      />
      <Body>
        {React.Children.toArray(props.children)}
      </Body>
      <Footer></Footer>
    </div>
  );
}

App.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string,
  }),
  children: React.PropTypes.node,
};
