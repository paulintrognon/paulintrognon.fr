import { BlogPostType } from '../../../blog/types/BlogPostType'
import BlogPostItem from '../BlogPostItem/BlogPostItem'

interface Props {
  posts: BlogPostType[]
}
const BlogPostItems: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <BlogPostItem key={post.slug} post={post} />
      ))}
    </>
  )
}
export default BlogPostItems
