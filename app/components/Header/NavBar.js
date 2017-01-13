import React from 'react';
import NavLink from './NavLink';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function () {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/skills">
            <FormattedMessage {...messages.skills} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/experiences">
            <FormattedMessage {...messages.experiences} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            <FormattedMessage {...messages.projects} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
