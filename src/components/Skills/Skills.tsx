import Intro from './Skills/Intro/Intro'
import FrontendSkills from './Skills/FrontendSkills/FrontendSkills'
import BackendSkills from './Skills/BackendSkills/BackendSkills'
import OtherSkills from './Skills/OtherSkills/OtherSkills'

const Skills: React.FC = () => {
  return (
    <section>
      <Intro />
      <FrontendSkills />
      <BackendSkills />
      <OtherSkills />
    </section>
  )
}
export default Skills
