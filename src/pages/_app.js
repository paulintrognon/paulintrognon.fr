import React from 'react';
import Router from 'next/router';
import '../reset.css';
import '../fonts.css';

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0);
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
