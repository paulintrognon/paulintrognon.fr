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
          <NavLink to="/" className={classes(props.pathname, '/')}>
            <FormattedMessage {...messages.skills} />
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/experiences" className={classes(props.pathname, '/experiences')}>
            <FormattedMessage {...messages.experiences} />
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/contact" className={classes(props.pathname, '/contact')}>
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

function classes(pathname, path) {
  return `yellow-link ${pathname === path ? 'active' : ''}`;
}
