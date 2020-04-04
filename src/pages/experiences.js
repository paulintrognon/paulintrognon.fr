import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Experiences from '../components/Experiences/Experiences';

export default () => (
  <Layout currentPage="/experiences">
    <Head>
      <title>Éxperiences - Paulin Trognon - Développeur Fullstack Freelance à Annecy</title>
      <meta
        name="description"
        content="Experiences pro de Paulin Trognon, expert JavaScript (Angular, React, React Native) et PHP (Symfony, Laravel), développeur web fullstack depuis 2013, basé à Annecy."
      />
    </Head>
    <Experiences />
  </Layout>
);
