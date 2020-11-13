import SkillSectionTitle from '../../Common/SkillSectionTitle/SkillSectionTitle'
import AgileSkill from './AgileSkill/AgileSkill'
import DevopsSkill from './DevopsSkill/DevopsSkill'

const OtherSkills: React.FC = () => {
  return (
    <div>
      <SkillSectionTitle>Autres compétences</SkillSectionTitle>
      <DevopsSkill />
      <AgileSkill />
    </div>
  )
}
export default OtherSkills
