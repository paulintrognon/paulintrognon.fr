import React from 'react';
import NavBar from './NavBar';
import Wrapper from './Wrapper';
import { FormattedMessage } from 'react-intl';
import H1 from './H1';
import H2 from './H2';
import Titles from './Titles';
import messages from './messages';

export default function () {
  return (
    <Wrapper>
      <Titles>
        <H1>
          <FormattedMessage {...messages.h1} />
        </H1>
        <H2>
          <FormattedMessage {...messages.h2} />
        </H2>
      </Titles>
      <NavBar />
    </Wrapper>
  );
}
