import React from 'react';
import Li from './Li';
import NavLink from './NavLink';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function NavBar(props) {
  return (
    <nav>
      <ul>
        <Li>
          <NavLink to="/" className={props.pathname === '/' ? 'active' : ''}>
            <FormattedMessage {...messages.skills} />
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/experiences" className={props.pathname === '/experiences' ? 'active' : ''}>
            <FormattedMessage {...messages.experiences} />
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/projects" className={props.pathname === '/projects' ? 'active' : ''}>
            <FormattedMessage {...messages.projects} />
          </NavLink>
        </Li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  pathname: React.PropTypes.string,
};
