import React from 'react';
import NavBar from './NavBar';
import Wrapper from './Wrapper';
import LocaleToggle from './LocaleToggle';
import { FormattedMessage } from 'react-intl';
import H1 from './H1';
import H2 from './H2';
import Titles from './Titles';
import messages from './messages';

export default function Header(props) {
  return (
    <Wrapper>
      <LocaleToggle />
      <Titles>
        <H1>
          <FormattedMessage {...messages.h1} />
        </H1>
        <H2>
          <FormattedMessage {...messages.h2} />
        </H2>
      </Titles>
      <NavBar pathname={props.pathname} />
    </Wrapper>
  );
}

Header.propTypes = {
  pathname: React.PropTypes.string,
};
