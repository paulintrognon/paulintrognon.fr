import Link from 'next/link';
import css from './Link.css';

export default ({ className, children, openInNewWindow, ...props }) => (
  <Link {...props}>
    <a
      target={openInNewWindow ? '_blank' : null}
      className={`${css.link} ${className}`}
    >
      {children}
    </a>
  </Link>
);
