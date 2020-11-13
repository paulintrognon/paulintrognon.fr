import BulletLine from '../../Common/BulletLine/BulletLine'
import Badges from '../Common/Badges/Badges/Badges'
import NodeJSBadge from '../Common/Badges/NodeJSBadge/NodeJSBadge'
import ReactBadge from '../Common/Badges/ReactBadge/ReactBadge'
import Experience from '../Common/Experience/Experience'

const JacquetExperience: React.FC = () => {
  return (
    <Experience
      imageUrl="/images/experiences/jacquet.jpg"
      title="Dévelopeur JavaScript FullStack"
      mission="Développement d’un site jeu concours"
      timePeriod="01.2018 - 04.2018"
    >
      <Badges>
        <ReactBadge />
        <NodeJSBadge />
      </Badges>
      <BulletLine>Architecture technique de l’application</BulletLine>
      <BulletLine>Interface en React.js</BulletLine>
      <BulletLine>Back-end en Node.js / Express</BulletLine>
      <BulletLine>Système de tirage au sort avec détection anti-triche</BulletLine>
    </Experience>
  )
}
export default JacquetExperience
