import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Contact from '../components/Contact/Contact';

export default () => (
  <Layout currentPage="/experiences">
    <Head>
      <title>
        Contactez Paulin Trognon - Développeur Fullstack Freelance à Lyon
      </title>
      <meta
        name="description"
        content="Contacter Paulin Trognon, expert JavaScript (Angular, React, React Native) et PHP (Symfony, Laravel), développeur web fullstack depuis 2013, basé à Lyon."
      />
    </Head>
    <Contact />
  </Layout>
);
