import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function () {
  return (
    <header>
      <h1>
        <FormattedMessage {...messages.h1} />
      </h1>
      <h2>
        <FormattedMessage {...messages.h2} />
      </h2>
    </header>
  );
}
