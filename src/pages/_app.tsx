import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/reset.css'
import '../styles/variables.css'
import '../styles/main.css'
import 'highlight.js/styles/agate.css'
import Layout from '../components/Layout/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
