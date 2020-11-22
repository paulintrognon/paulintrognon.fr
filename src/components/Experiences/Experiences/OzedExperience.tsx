import BulletLine from '../../Common/BulletLine/BulletLine'
import Badges from '../Common/Badges/Badges/Badges'
import AngularBadge from '../Common/Badges/AngularBadge/AngularBadge'
import NodeJSBadge from '../Common/Badges/NodeJSBadge/NodeJSBadge'
import Experience from '../Common/Experience/Experience'

const OzedExperience: React.FC = () => {
  return (
    <Experience
      imageUrl="/images/experiences/ozed.jpg"
      title="Développeur JavaScript Fullstack"
      mission="Portail Pro B2B pour opticiens"
      timePeriod="01.2017 - 04.2017"
    >
      <Badges>
        <AngularBadge />
        <NodeJSBadge />
      </Badges>
      <BulletLine>Développement du Front en Angular 4</BulletLine>
      <BulletLine>Développement des APIs en Node.js</BulletLine>
      <BulletLine>Migrations / ORM avec Sequelize</BulletLine>
      <BulletLine>Déploiement sur VPS OVH</BulletLine>
    </Experience>
  )
}
export default OzedExperience
