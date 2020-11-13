import SkillSectionTitle from '../../Common/SkillSectionTitle/SkillSectionTitle'
import CodeQualitySkill from './CodeQualitySkill/CodeQualitySkill'
import OtherSkill from './OtherSkill/OtherSkill'
import ReactSkill from './ReactSkill.tsx/ReactSkill'
import TypeScriptSkill from './TypeScriptSkill/TypeScriptSkill'

const FrontendSkills: React.FC = () => {
  return (
    <div>
      <SkillSectionTitle>Développeur Front</SkillSectionTitle>
      <ReactSkill />
      <TypeScriptSkill />
      <CodeQualitySkill />
      <OtherSkill />
    </div>
  )
}
export default FrontendSkills
