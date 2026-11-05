import { NextPage } from 'next'
import Seo from '../components/Layout/Seo/Seo'
import Experiences from '../components/Experiences/Experiences'

const IndexPage: NextPage = () => (
  <>
    <Seo
      title="Éxperiences"
      description="Expériences pro de Paulin Trognon : Founding Engineer chez Nexteneo, Swile, missions freelance (Boiron, Danone), ReportLinker"
    />
    <Experiences />
  </>
)
export default IndexPage
