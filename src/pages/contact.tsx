import { NextPage } from 'next'
import Seo from '../components/Layout/Seo/Seo'
import Contact from '../components/Contact/Contact'

const IndexPage: NextPage = () => (
  <>
    <Seo
      title="Contactez Paulin Trognon"
      description="Contactez Paulin Trognon, expert JavaScript/TypeScript (React, Node.js), développeur freelance basé à Annecy."
    />
    <Contact />
  </>
)
export default IndexPage
