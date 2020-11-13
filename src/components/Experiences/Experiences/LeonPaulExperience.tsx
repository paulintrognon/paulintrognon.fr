import BulletLine from '../../Common/BulletLine/BulletLine'
import Badges from '../Common/Badges/Badges/Badges'
import Html5Badge from '../Common/Badges/Html5Badge/Html5Badge'
import JqueryBadge from '../Common/Badges/JqueryBadge/JqueryBadge'
import PhpBadge from '../Common/Badges/PhpBadge/PhpBadge'
import Experience from '../Common/Experience/Experience'

const LeonPaulExperience: React.FC = () => {
  return (
    <Experience
      imageUrl="/images/experiences/leonpaul.png"
      title="Développeur Web Fullstack"
      mission="Refonte du CRM"
      timePeriod="01.2011 - 05.2011"
    >
      <Badges>
        <Html5Badge />
        <JqueryBadge />
        <PhpBadge />
      </Badges>
      <BulletLine>Recueil des besoins auprès des utilisateurs de l’ancien système</BulletLine>
      <BulletLine>Architecture complète du projet et élaboration des écrans</BulletLine>
      <BulletLine>Développement du CRM en PHP/JavaScript/jQuery</BulletLine>
      <BulletLine>
        Développement du système d’importation des commandes depuis Magento en PHP (via SOAP)
      </BulletLine>
    </Experience>
  )
}
export default LeonPaulExperience
