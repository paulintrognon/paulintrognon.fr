import Link from 'next/link';

import css from './header.css';

export default () => (
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
        <li className={css.navItem}>
          <Link href="/">
            <a className={css.activeNavLink}>Compétences</a>
          </Link>
        </li>
        <li className={css.navItem}>
          <Link href="/experiences">
            <a className={css.navLink}>Éxperiences</a>
          </Link>
        </li>
        <li className={css.navItem}>
          <Link href="/contact">
            <a className={css.navLink}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
