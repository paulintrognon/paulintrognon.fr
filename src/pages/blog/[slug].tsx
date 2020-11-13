import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Seo from '../../components/Layout/Seo/Seo'
import BlogPost from '../../components/Blogs/BlogPost/BlogPost'
import { BlogPostType } from '../../blog/types/BlogPostType'
import { getPosts } from '../../blog/services/getPosts'
import { getPostDetails } from '../../blog/services/getPostDetails'

interface Props {
  post: BlogPostType
}
const BlogPostPage: NextPage<Props> = ({ post }) => (
  <>
    <Seo title={post.title} doNotExtendTitle description={post.excerpt} />
    <BlogPost post={post} />
  </>
)
export default BlogPostPage

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = getPostDetails(params?.slug as string)
  if (!post) {
    return { notFound: true }
  }

  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts()

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}
