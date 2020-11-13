import BulletLine from '../../Common/BulletLine/BulletLine'
import Badges from '../Common/Badges/Badges/Badges'
import GraphqlBadge from '../Common/Badges/GraphqlBadge/GraphqlBadge'
import PrismicBadge from '../Common/Badges/PrismicBadge/PrismicBadge'
import ReactBadge from '../Common/Badges/ReactBadge/ReactBadge'
import Experience from '../Common/Experience/Experience'

const DanoneExperience: React.FC = () => {
  return (
    <Experience
      imageUrl="/images/experiences/danone.jpg"
      title="Lead Dev Front"
      mission="Développement d’une appli mobile B2B"
      timePeriod="05.2018 - 11.2018"
    >
      <Badges>
        <ReactBadge native />
        <GraphqlBadge />
        <PrismicBadge />
      </Badges>
      <BulletLine>Architecture technique de l’application</BulletLine>
      <BulletLine>Développement des interfaces en React Native</BulletLine>
      <BulletLine>Utilisation de Redux Saga pour le state global</BulletLine>
      <BulletLine>Moteur de synchronisation des contenus pour le hors-ligne</BulletLine>
      <BulletLine>Conception du back-end Prismic / Requêtes GraphQL</BulletLine>
      <BulletLine>Montée en compétence des juniors (pair programming)</BulletLine>
    </Experience>
  )
}
export default DanoneExperience
