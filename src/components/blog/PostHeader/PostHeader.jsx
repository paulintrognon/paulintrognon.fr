import Link from 'next/link';
import Date from '../../Date';
import css from './PostHeader.module.css';

export default ({ title, date }) => (
  <div className={css.main}>
    <div className={css.backLink}>
      <Link href="/blog">
        <a>← All articles</a>
      </Link>
    </div>
    <h1 className={css.title}>{title}</h1>
    <p>
      Last updated: <Date dateString={date} />
    </p>
  </div>
);
