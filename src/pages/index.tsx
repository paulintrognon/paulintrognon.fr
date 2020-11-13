import { NextPage } from 'next'
import Head from 'next/head'
import Skills from '../components/Skills/Skills'

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Développeur TypeScript Fullstack (React/NodeJS) - Paulin Trognon, Annecy</title>
    </Head>
    <Skills />
  </>
)
export default IndexPage
