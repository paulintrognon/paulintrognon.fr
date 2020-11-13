import { NextPage } from 'next'
import Seo from '../components/Layout/Seo/Seo'
import Experiences from '../components/Experiences/Experiences'

const IndexPage: NextPage = () => (
  <>
    <Seo
      title="Éxperiences"
      description="Experiences pro de Paulin Trognon: Lead Dev Front Boiron, Danone ; Dev FullStack Eovi, ReportLinker"
    />
    <Experiences />
  </>
)
export default IndexPage
