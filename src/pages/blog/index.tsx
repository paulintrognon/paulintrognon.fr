import { GetStaticProps, NextPage } from 'next'
import { getAllPosts } from '../../blog/blog'
import { BlogPostType } from '../../blog/types/BlogPostType'
import BlogPostItems from '../../components/Blogs/BlogPostItems/BlogPostItems'

interface Props {
  posts: BlogPostType[]
}
const IndexPage: NextPage<Props> = ({ posts }) => <BlogPostItems posts={posts} />
export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  return {
    props: { posts },
  }
}
