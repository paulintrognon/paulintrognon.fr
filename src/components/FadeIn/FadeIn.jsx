import { CSSTransition } from 'react-transition-group';
import React from 'react';

import css from './FadeIn.module.css';

class FadeIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inProp: false };
  }

  componentDidMount() {
    this.setState({ inProp: true });
  }

  render() {
    const { inProp } = this.state;
    const { children } = this.props;
    return (
      <CSSTransition in={inProp} timeout={{ enter: 200 }} classNames={{ ...css }}>
        <div className={css.main}>{children}</div>
      </CSSTransition>
    );
  }
}
export default FadeIn;
