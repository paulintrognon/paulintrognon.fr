import { CSSTransitionGroup } from 'react-transition-group';
import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import OtherSkills from './OtherSkills';
import css from './skills.css';

export default () => (
  <div>
    <CSSTransitionGroup
      transitionName={{
        appear: css.appear,
        appearActive: css.appearActive,
      }}
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div>
        <FrontendSkills />
        <BackendSkills />
        <OtherSkills />
      </div>
    </CSSTransitionGroup>
  </div>
);
