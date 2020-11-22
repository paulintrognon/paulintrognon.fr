import BulletLine from '../../Common/BulletLine/BulletLine'
import AngularBadge from '../Common/Badges/AngularBadge/AngularBadge'
import Badges from '../Common/Badges/Badges/Badges'
import ElasticSearchBadge from '../Common/Badges/ElasticSearchBadge/ElasticSearchBadge'
import NodeJSBadge from '../Common/Badges/NodeJSBadge/NodeJSBadge'
import RabbitMQBadge from '../Common/Badges/RabbitMQBadge/RabbitMQBadge'
import Experience from '../Common/Experience/Experience'

const ReportLinkerExperience: React.FC = () => {
  return (
    <Experience
      imageUrl="/images/experiences/rlk.jpg"
      title="Développeur JavaScript Fullstack"
      mission="Moteur de recherche d’études de marché"
      timePeriod="02.2014 - 12.2016"
    >
      <Badges>
        <NodeJSBadge />
        <AngularBadge isJs={true} />
        <ElasticSearchBadge />
        <RabbitMQBadge />
      </Badges>
      <BulletLine>
        Migration d’une application monolithique Symfony vers une architecture 100%&nbsp;JavaScript
      </BulletLine>
      <BulletLine>Conception des micro-services Node.js</BulletLine>
      <BulletLine>
        Mise en place de tests unitaires et de tests E2E (orchestrés viaJenkins)
      </BulletLine>
      <BulletLine>
        Conceptions d’apps Node.js de data processing (en stream,via RabbitMQ)
      </BulletLine>
      <BulletLine>
        Écriture des algorithmes de recherche full-text en utilisantElasticSearch
      </BulletLine>
      <BulletLine>Développement du frontend en Angular.js</BulletLine>
    </Experience>
  )
}
export default ReportLinkerExperience
