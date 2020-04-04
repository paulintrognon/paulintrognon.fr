import React from 'react';
import { CSSTransition } from 'react-transition-group';
import throttle from 'throttleit';
import Link from '../../Link/Link';

import css from './header.module.css';

const nav = [
  {
    url: '/',
    label: 'Compétences',
  },
  {
    url: '/experiences',
    label: 'Expériences',
  },
  {
    url: '/blog',
    label: 'Blog',
  },
  {
    url: '/contact',
    label: 'Contact',
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areTitlesDisplayed: true,
      lastY: 0,
    };
  }

  hideTitles = () => {
    this.setState({ areTitlesDisplayed: false });
  };

  showTitles = () => {
    this.setState({ areTitlesDisplayed: true });
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = throttle(() => {
    const currentY = window.pageYOffset;
    if (currentY > this.state.lastY && this.state.areTitlesDisplayed && currentY > 50) {
      this.hideTitles();
    } else if (currentY < this.state.lastY && !this.state.areTitlesDisplayed && currentY < 200) {
      this.showTitles();
    }
    this.setState({ lastY: window.pageYOffset });
  }, 100);

  render() {
    const { currentPage } = this.props;
    const { areTitlesDisplayed } = this.state;
    return (
      <header className={css.header}>
        <CSSTransition
          timeout={200}
          in={areTitlesDisplayed}
          classNames={{
            enter: css.titlesEnter,
            enterActive: css.titlesEnterActive,
            exit: css.titlesExit,
            exitActive: css.titlesExitActive,
          }}
          unmountOnExit
        >
          <div className={css.titles}>
            <h1 className={css.mainTitle}>
              <span>Paulin Trognon</span>
            </h1>
            <h2 className={css.subtitle}>
              <span>Développeur full stack Freelance, Annecy</span>
            </h2>
          </div>
        </CSSTransition>
        <nav>
          <ul className={css.nav}>
            {nav.map(navItem => (
              <li className={css.navItem} key={navItem.url}>
                <Link
                  href={navItem.url}
                  className={currentPage === navItem.url ? css.activeNavLink : css.navItem}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
