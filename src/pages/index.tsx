import { NextPage } from 'next'
import Seo from '../components/Layout/Seo/Seo'
import Skills from '../components/Skills/Skills'

const IndexPage: NextPage = () => (
  <>
    <Seo description="Site de Paulin Trognon, expert JavaScript/TypeScript (React / Node.js), Lead Dev front et développeur web freelance fullstack, basé à Annecy." />
    <Skills />
  </>
)
export default IndexPage
