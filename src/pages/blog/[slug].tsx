import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllPosts, getPostBySlug } from '../../blog/blog'
import { BlogPostType } from '../../blog/types/BlogPostType'
import { Converter } from 'showdown'
import showdownHighlight from 'showdown-highlight'
import BlogPost from '../../components/Blogs/BlogPost/BlogPost'

interface Props {
  post: BlogPostType
}
const BlogPostPage: NextPage<Props> = ({ post }) => <BlogPost post={post} />
export default BlogPostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string)
  const converter = new Converter({
    extensions: [showdownHighlight],
  })
  const content = converter.makeHtml(post?.content as string)

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
