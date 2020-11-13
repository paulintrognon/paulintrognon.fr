import { BlogPostType } from '../../../blog/types/BlogPostType'
import styles from './BlogPost.module.css'

interface Props {
  post: BlogPostType
}
const BlogPost: React.FC<Props> = ({ post }) => {
  const date = new Date(post.date)
  return (
    <article>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>Last updated: {date.toLocaleDateString()}</p>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
export default BlogPost
