import { CSSTransitionGroup } from 'react-transition-group';
import css from './FadeIn.css';

export default ({ children }) => (
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
    {children}
  </CSSTransitionGroup>
);
