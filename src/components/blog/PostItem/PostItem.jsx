import Link from 'next/link';
import Date from '../../Date';
import css from './PostItem.module.css';

export default ({ blogPosts }) => (
  <div>
    {blogPosts.map((post) => (
      <div key={post.slug}>
        <Link href={`blog/post/${post.slug}`} key={post.slug}>
          <a className={css.item}>
            <h2 className={css.title}>{post.title}</h2>
            <p className={css.date}>
              Last updated: <Date dateString={post.date} />
            </p>
            <p className={css.excerpt}>{post.excerpt}</p>
          </a>
        </Link>
      </div>
    ))}
  </div>
);
