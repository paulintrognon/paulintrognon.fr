import BulletLine from '../../Common/BulletLine/BulletLine'
import BackboneBadge from '../Common/Badges/BackboneBadge/BackboneBadge'
import Badges from '../Common/Badges/Badges/Badges'
import Html5Badge from '../Common/Badges/Html5Badge/Html5Badge'
import PhpBadge from '../Common/Badges/PhpBadge/PhpBadge'
import Experience from '../Common/Experience/Experience'

const DCDLExperience: React.FC = () => {
  return (
    <Experience
      imageUrl="/images/experiences/dcdl.jpg"
      title="Développeur Web Fullstack"
      mission="Adaptation web du jeu Des Chiffres & Des Lettres"
      timePeriod="02.2013 - 07.2013"
    >
      <Badges>
        <Html5Badge />
        <BackboneBadge />
        <PhpBadge />
      </Badges>
      <BulletLine>Développement du moteur du jeu avec backbone.js </BulletLine>
      <BulletLine>Conception des micro-services Node.js</BulletLine>
      <BulletLine>
        Architecture du matchmaking asynchrone avec un stockage en NoSQL (DynamoDB)
      </BulletLine>
      <BulletLine>Développement du back-end en PHP / Symfony</BulletLine>
    </Experience>
  )
}
export default DCDLExperience
