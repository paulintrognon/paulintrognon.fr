import { BlogPostType } from '../../../blog/types/BlogPostType'
import styles from './BlogPost.module.css'

interface Props {
  post: BlogPostType
}
const BlogPost: React.FC<Props> = ({ post }) => {
  const date = new Date(post.date)
  return (
    <article data-cy="BlogPost">
      <h1 className={styles.title} data-cy="BlogPost_title">
        {post.title}
      </h1>
      <p className={styles.date}>
        Last updated:{' '}
        {date.toLocaleString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        })}
      </p>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
export default BlogPost
