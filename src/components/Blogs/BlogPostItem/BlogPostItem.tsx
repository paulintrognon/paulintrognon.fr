import Link from 'next/link'
import { BlogPostType } from '../../../blog/types/BlogPostType'
import A from '../../Common/A/A'
import Header3 from '../../Common/Header3/Header3'
import styles from './BlogPostItem.module.css'

interface Props {
  post: BlogPostType
}
const BlogPostItem: React.FC<Props> = ({ post }) => {
  const href = `/blog/${post.slug}`
  return (
    <div className={styles.post}>
      <Link href={href}>
        <a>
          <Header3 className={styles.title}>{post.title}</Header3>
        </a>
      </Link>
      <p className={styles.date}>Last updated: {new Date(post.date).toLocaleDateString()}</p>
      <p>{post.excerpt}</p>
      <p className={styles.more}>
        <A href={href}>Read more →</A>
      </p>
    </div>
  )
}
export default BlogPostItem
