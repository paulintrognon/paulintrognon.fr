import Link from 'next/link';

import css from './header.css';

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
    url: '/contact',
    label: 'Contact',
  },
];

export default ({ currentPage }) => (
  <header className={css.header}>
    <div className={css.titles}>
      <h1 className={css.mainTitle}>
        <span>Paulin Trognon</span>
      </h1>
      <h2 className={css.subtitle}>
        <span>Développeur full stack Freelance, Lyon</span>
      </h2>
    </div>
    <nav>
      <ul className={css.nav}>
        {nav.map(navItem => (
          <li className={css.navItem} key={navItem.url}>
            <Link href={navItem.url}>
              <a
                className={
                  currentPage === navItem.url ? css.activeNavLink : css.navItem
                }
              >
                {navItem.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
