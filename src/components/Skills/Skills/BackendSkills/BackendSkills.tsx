import SkillSectionTitle from '../../Common/SkillSectionTitle/SkillSectionTitle'
import ElasticSearchSkill from './ElasticSearchSkill/ElasticSearchSkill'
import NodeJsSkill from './NodeJsSkill/NodeJsSkill'
import PhpSkill from './PhpSkill/PhpSkill'

const BackendSkills: React.FC = () => (
  <div>
    <SkillSectionTitle>Développeur Back</SkillSectionTitle>
    <NodeJsSkill />
    <ElasticSearchSkill />
    <PhpSkill />
  </div>
)
export default BackendSkills
