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
    <div className={styles.post} data-cy="BlogPostItem">
      <Link href={href}>
        <a data-cy="BlogPostItem_title">
          <Header3 className={styles.title}>{post.title}</Header3>
        </a>
      </Link>
      <p className={styles.date}>Last updated: {new Date(post.date).toString()}</p>
      <p data-cy="BlogPostItem_excerpt">{post.excerpt}</p>
      <p className={styles.more}>
        <A href={href} data-cy="BlogPostItem_link">
          Read more →
        </A>
      </p>
    </div>
  )
}
export default BlogPostItem
