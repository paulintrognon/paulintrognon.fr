import A from '../../../../Common/A/A'
import Skill from '../../../Common/Skill/Skill'
import BulletLine from '../../../../Common/BulletLine/BulletLine'
import SkillTitle from '../../../Common/SkillTitle/SkillTitle'
import AngularLogo from './angular.svg'

const OtherSkill: React.FC = () => {
  return (
    <Skill icon={<AngularLogo />}>
      <SkillTitle>Autres compétences Front</SkillTitle>
      <BulletLine>
        J&apos;ai longtemps utilisé Angular.js puis <A href="https://angular.io/">Angular</A> avant
        de passer à React.js. Je suis donc familier avec{' '}
        <A href="https://rxjs-dev.firebaseapp.com/guide/overview">RxJS</A> (d&apos;où mon attrait
        pour Redux-Observable), ainsi qu&apos;avec <A href="ionicframework.com/">Ionic</A>.
      </BulletLine>
      <BulletLine>
        Je suis très expérimenté en intégration HTML/CSS, et parfaitement à l&apos;aise avec les
        dernières nouveautées du CSS, comme les flexbox, les media-queries, les custom properties.
      </BulletLine>
      <BulletLine>
        <A href="https://graphql.org/">GraphQL</A>, <A href="https://swagger.io/">Swagger</A>,
        Babel, Webpack, BEM, SCSS, PWA (
        <A href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API">
          service workers
        </A>
        )
      </BulletLine>
    </Skill>
  )
}
export default OtherSkill
