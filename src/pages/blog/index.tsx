import { GetStaticProps, NextPage } from 'next'
import { getPosts } from '../../blog/services/getPosts'
import { BlogPostType } from '../../blog/types/BlogPostType'
import Seo from '../../components/Layout/Seo/Seo'
import BlogPostItems from '../../components/Blogs/BlogPostItems/BlogPostItems'

interface Props {
  posts: BlogPostType[]
}
const IndexPage: NextPage<Props> = ({ posts }) => (
  <>
    <Seo
      title="Blog"
      description="Découvrez les derniers articles de Paulin Trognon, expert JavaScript/TypeScript (React, Node.js), développeur freelance basé à Annecy."
    />
    <BlogPostItems posts={posts} />
  </>
)
export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts()
  return {
    props: { posts },
  }
}
