import A from '../../../../Common/A/A'
import Skill from '../../../Common/Skill/Skill'
import BulletLine from '../../../../Common/BulletLine/BulletLine'
import SkillTitle from '../../../Common/SkillTitle/SkillTitle'
import TypeScriptLogo from './typescript.svg'

const TypeScriptSkill: React.FC = () => {
  return (
    <Skill icon={<TypeScriptLogo />}>
      <SkillTitle>TypeScript</SkillTitle>
      <BulletLine>
        Depuis que je suis passé au <A href="https://www.typescriptlang.org/">TypeScript</A>,
        difficile pour moi de travailler sur une codebase non typée&nbsp;!
      </BulletLine>
      <BulletLine>
        Expérimenté aux projets React entièrement typés, des reducers aux composants
      </BulletLine>
      <BulletLine>
        Au courant des notions avancées comme les Type Guards, et des dernières notions venant du JS
        comme le async/await, destructuring, le spreading, le nullish coalescing, etc.
      </BulletLine>
      <BulletLine>
        J&apos;ai écrit un{' '}
        <A href="/blog/post/typescript-prettier-eslint-next-js">article de blog</A> sur comment
        commencer un projet propre en TypeScript, qui est visité plusieurs dizaines de fois par
        jour.
      </BulletLine>
    </Skill>
  )
}
export default TypeScriptSkill
