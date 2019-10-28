import FadeIn from '../FadeIn/FadeIn';
import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import OtherSkills from './OtherSkills';

export default () => (
  <div>
    <FadeIn>
      <div>
        <FrontendSkills />
        <BackendSkills />
        <OtherSkills />
      </div>
    </FadeIn>
  </div>
);
