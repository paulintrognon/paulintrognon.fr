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
          <NavLink to="/contact" className={props.pathname === '/contact' ? 'active' : ''}>
            <FormattedMessage {...messages.contact} />
          </NavLink>
        </Li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  pathname: React.PropTypes.string,
};
