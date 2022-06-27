import BulletLine from '../../Common/BulletLine/BulletLine'
import Badges from '../Common/Badges/Badges/Badges'
import MaterialUiBadge from '../Common/Badges/MaterialUiBadge/MaterialUiBadge'
import NextJsBadge from '../Common/Badges/NextJsBadge/NextJsBadge'
import ReactBadge from '../Common/Badges/ReactBadge/ReactBadge'
import TypeScriptBadge from '../Common/Badges/TypeScriptBadge/TypeScriptBadge'
import Experience from '../Common/Experience/Experience'

const SwileExperience: React.FC = () => {
  return (
    <Experience
      imageUrl="/images/experiences/swile.png"
      title="Senior Software Engineer"
      mission="Développement d'outils internes et backend"
      timePeriod="01.2021 - 06.2021"
    >
      <Badges>
        <TypeScriptBadge />
        <ReactBadge />
        <NextJsBadge />
        <MaterialUiBadge />
      </Badges>
      <BulletLine>Création d&apos;une librairie interne (Lerna)</BulletLine>
      <BulletLine>Ateliers sur une nouvelle du code backend</BulletLine>
      <BulletLine>Initiation d&apos;une migration vers TypeScript</BulletLine>
      <BulletLine>Développement de dashboards Material UI</BulletLine>
    </Experience>
  )
}
export default SwileExperience
