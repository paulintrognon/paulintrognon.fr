import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Skills from '../components/Skills/Skills';

export default () => (
  <Layout currentPage="/">
    <Head>
      <title>Paulin Trognon - Développeur Fullstack Freelance à Annecy</title>
      <meta
        name="description"
        content="Paulin Trognon, expert JavaScript (Angular, React, React Native) et PHP (Symfony, Laravel), développeur web fullstack depuis 2013, basé à Annecy."
      />
    </Head>
    <Skills />
  </Layout>
);
