import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Title from '../../../components/Layout/Title';
import Layout from '../../../components/Layout/Layout';
import PostBody from '../../../components/blog/PostBody/PostBody';
import PostHeader from '../../../components/blog/PostHeader/PostHeader';
import { getPostBySlug, getAllPosts } from '../../../lib/api';
import markdownToHtml from '../../../lib/markdownToHtml';

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout currentPage="/blog">
      {router.isFallback ? (
        <p>Chargement…</p>
      ) : (
        <article>
          <Title>{post.title}</Title>
          <PostHeader title={post.title} date={post.date} />
          <PostBody content={post.content} />
        </article>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
