import A from '../../../../Common/A/A'
import Skill from '../../../Common/Skill/Skill'
import BulletLine from '../../../../Common/BulletLine/BulletLine'
import SkillTitle from '../../../Common/SkillTitle/SkillTitle'
import ESLintLogo from './eslint.svg'

const CodeQualitySkill: React.FC = () => {
  return (
    <Skill icon={<ESLintLogo />}>
      <SkillTitle>Qualité logicielle, CI/CD</SkillTitle>
      <BulletLine>
        La qualité logicielle est un sujet qui me tient à cœur&nbsp;: je donne des cours niveau
        licence 3 à ce sujet.
      </BulletLine>
      <BulletLine>
        Outils de lintage&nbsp;: <A href="https://eslint.org/">ESLint</A>,{' '}
        <A href="https://prettier.io/">Prettier</A>,{' '}
        <A href="https://github.com/typicode/husky">Husky</A>
      </BulletLine>
      <BulletLine>
        Testing&nbsp;: <A href="https://jestjs.io/">Jest</A>,{' '}
        <A href="https://mochajs.org/">Mocha</A>,{' '}
        <A href="https://enzymejs.github.io/enzyme/">Enzyme</A>,{' '}
        <A href="https://docs.cypress.io">Cypress</A>
      </BulletLine>
      <BulletLine>
        CI/CD&nbsp;: <A href="https://www.docker.com/resources/what-container">Docker</A>,{' '}
        <A href="https://docs.gitlab.com/ee/ci/#getting-started">Gitlab-CI</A>,{' '}
        <A href="https://docs.github.com/en/free-pro-team@latest/actions/quickstart">
          Github Actions
        </A>
        , code reviews
      </BulletLine>
      <BulletLine>
        Grand amateur du BDD (Behavior-Driven Development)&nbsp;: specs écrites en Gherkin et
        implémentées avec des tests d&apos;intégration
      </BulletLine>
    </Skill>
  )
}
export default CodeQualitySkill
