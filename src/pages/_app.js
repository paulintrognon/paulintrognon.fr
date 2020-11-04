import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import '../reset.css';
import '../fonts.css';
import 'highlight.js/styles/agate.css';

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0);
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-domain="paulintrognon.fr"
          src="https://analytiques.paulintrognon.fr/js/plausible.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
