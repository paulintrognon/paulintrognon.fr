import BulletLine from '../../Common/BulletLine/BulletLine'
import Badges from '../Common/Badges/Badges/Badges'
import NestJsBadge from '../Common/Badges/NestJsBadge/NestJsBadge'
import NextJsBadge from '../Common/Badges/NextJsBadge/NextJsBadge'
import PostgreSqlBadge from '../Common/Badges/PostgreSqlBadge/PostgreSqlBadge'
import TypeScriptBadge from '../Common/Badges/TypeScriptBadge/TypeScriptBadge'
import Experience from '../Common/Experience/Experience'

const NexteneoExperience: React.FC = () => {
  return (
    <Experience
      imageUrl="/images/experiences/nexteneo.svg"
      title="Founding Engineer"
      mission="Plateforme de recharge pour véhicules électriques"
      timePeriod="06.2021 - Maintenant"
    >
      <Badges>
        <TypeScriptBadge />
        <NestJsBadge />
        <NextJsBadge />
        <PostgreSqlBadge />
      </Badges>
      <BulletLine>Conception et création de toute la stack technique</BulletLine>
      <BulletLine>
        Backend NestJS / Prisma / PostgreSQL, files de traitement Redis (Bull)
      </BulletLine>
      <BulletLine>Proxy OCPP (WebSocket) pour piloter le parc de bornes de recharge</BulletLine>
      <BulletLine>
        Librairie de smart charging : répartition de la puissance entre les bornes
      </BulletLine>
      <BulletLine>
        Back-office admin et dashboard client (Next.js / Material UI), appli mobile conducteur
        (React Native / Expo), PWA de paiement (Stripe)
      </BulletLine>
      <BulletLine>
        Infra : Kubernetes, ArgoCD (GitOps), OpenTofu, observabilité OpenTelemetry / Grafana
      </BulletLine>
      <BulletLine>Lead d&apos;une équipe de 3 développeurs</BulletLine>
    </Experience>
  )
}
export default NexteneoExperience
