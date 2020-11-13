import A from '../../../../Common/A/A'
import Skill from '../../../Common/Skill/Skill'
import BulletLine from '../../../../Common/BulletLine/BulletLine'
import SkillTitle from '../../../Common/SkillTitle/SkillTitle'
import ScrumLogo from './scrum.svg'

const AgileSkill: React.FC = () => {
  return (
    <Skill icon={<ScrumLogo />}>
      <SkillTitle>Agile / Scrum</SkillTitle>
      <BulletLine>
        Je suis très au fait de la méthodologie Agile, que je pratique depuis 6 ans.
      </BulletLine>
      <BulletLine>
        J&apos;anime régulièrement des sprint reviews, et recommande la pratique &quot;buy a
        feature&quot; pour la priorisation et le sprint planning
      </BulletLine>
      <BulletLine>
        Évangéliste du BDD et du{' '}
        <A href="https://www.jbvigneron.fr/parlons-dev/bdd-rediger-scenarios-avec-gherkin/">
          Gherkin
        </A>
      </BulletLine>
    </Skill>
  )
}
export default AgileSkill
