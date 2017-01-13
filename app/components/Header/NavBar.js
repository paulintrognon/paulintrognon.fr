import React from 'react';
import Li from './Li';
import NavLink from './NavLink';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function () {
  return (
    <nav>
      <ul>
        <Li>
          <NavLink to="/skills">
            <FormattedMessage {...messages.skills} />
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/experiences">
            <FormattedMessage {...messages.experiences} />
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/projects">
            <FormattedMessage {...messages.projects} />
          </NavLink>
        </Li>
      </ul>
    </nav>
  );
}
