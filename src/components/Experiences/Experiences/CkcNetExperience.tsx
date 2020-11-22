import BulletLine from '../../Common/BulletLine/BulletLine'
import Badges from '../Common/Badges/Badges/Badges'
import LaravelBadge from '../Common/Badges/LaravelBadge/LaravelBadge'
import PhpBadge from '../Common/Badges/PhpBadge/PhpBadge'
import VueBadge from '../Common/Badges/VueBadge/VueBadge'
import Experience from '../Common/Experience/Experience'

const CkcNetExperience: React.FC = () => {
  return (
    <Experience
      imageUrl="/images/experiences/ckcnet.jpg"
      title="Développeur PHP Fullstack"
      mission="Développement de back-offices / Reporting boards"
      timePeriod="05.2017 - 12.2017"
    >
      <Badges>
        <PhpBadge />
        <LaravelBadge />
        <VueBadge />
      </Badges>
      <BulletLine>Développement du Back en Laravel / Eloquent</BulletLine>
      <BulletLine>Développement des API Rest / Swagger</BulletLine>
      <BulletLine>Intégration Responsive HTML/CSS</BulletLine>
      <BulletLine>Interactivité avec Vue.js</BulletLine>
    </Experience>
  )
}
export default CkcNetExperience
