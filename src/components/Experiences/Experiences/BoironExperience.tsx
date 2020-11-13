import BulletLine from '../../Common/BulletLine/BulletLine'
import Badges from '../Common/Badges/Badges/Badges'
import GraphqlBadge from '../Common/Badges/GraphqlBadge/GraphqlBadge'
import ReactBadge from '../Common/Badges/ReactBadge/ReactBadge'
import TypeScriptBadge from '../Common/Badges/TypeScriptBadge/TypeScriptBadge'
import Experience from '../Common/Experience/Experience'

const BoironExperience: React.FC = () => {
  return (
    <Experience
      imageUrl="/images/experiences/boiron.jpg"
      title="Lead Dev Front"
      mission="Développement d’un portail pro (application web B2B)"
      timePeriod="05.2020 - Maintenant"
    >
      <Badges>
        <ReactBadge />
        <TypeScriptBadge />
        <GraphqlBadge />
      </Badges>
      <BulletLine>Architecture technique de la PWA</BulletLine>
      <BulletLine>Bootstrapping (mise en place TypeScript / Next.js / Docker)</BulletLine>
      <BulletLine>Mise en place tooling DX : ESLint / Prettier / Husky</BulletLine>
      <BulletLine>Installation de la CI Front (Jest / Cypress / Gitlab-CI)</BulletLine>
      <BulletLine>Intégration Keycloak</BulletLine>
      <BulletLine>Intégration et branchement des interfaces avec GraphQL</BulletLine>
      <BulletLine>
        BDD : développement des story Gherkin, avec tests d’intégrations correspondants
      </BulletLine>
      <BulletLine>Montée en compétence des juniors (pair programming)</BulletLine>
    </Experience>
  )
}
export default BoironExperience
