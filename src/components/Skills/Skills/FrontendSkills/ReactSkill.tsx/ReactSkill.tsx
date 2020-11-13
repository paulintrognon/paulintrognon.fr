import A from '../../../../Common/A/A'
import Skill from '../../../Common/Skill/Skill'
import BulletLine from '../../../../Common/BulletLine/BulletLine'
import SkillTitle from '../../../Common/SkillTitle/SkillTitle'
import ReactLogo from './react.svg'

const ReactSkill: React.FC = () => {
  return (
    <Skill icon={<ReactLogo />}>
      <SkillTitle>React.js</SkillTitle>
      <BulletLine>
        Utilisation à plein temps de <A href="https://reactjs.org/">React.js</A> depuis 2017
      </BulletLine>
      <BulletLine>
        À l&apos;aise avec les Hooks, le Context, avec Redux (
        <A href="https://redux-saga.js.org/">Redux-Saga</A>,{' '}
        <A href="https://redux-observable.js.org/">Redux-observables</A>)
      </BulletLine>
      <BulletLine>
        J&apos;affectionne particulièrement le framework <A href="https://nextjs.org/">Next.js</A>{' '}
        (SSR, SSG, Code Splitting)
      </BulletLine>
      <BulletLine>
        Familier avec <A href="https://reactnative.dev/">React Native</A>, que j&apos;ai utilisé
        dans le cadre d&apos;une mission pour Danone
      </BulletLine>
      <BulletLine>
        Pour les animations, j&apos;utilise{' '}
        <A href="https://github.com/reactjs/react-transition-group">react-transition-group</A>, et
        je me forme sur <A href="https://www.react-spring.io/">react-spring</A>
      </BulletLine>
    </Skill>
  )
}
export default ReactSkill
