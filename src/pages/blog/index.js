import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Title from '../../components/Layout/Title';
import { getAllPosts } from '../../lib/api';

export default ({ posts }) => (
  <Layout currentPage="/blog">
    <Title>Blog</Title>
    <Head>
      <meta
        name="description"
        content="Blog de Paulin Trognon, expert JavaScript (React, Angular, Node.js) et PHP (Laravel), développeur web fullstack depuis 2013, basé à Annecy."
      />
    </Head>
    {posts.map((post) => (
      <div>
        <Link href={`blog/post/${post.slug}`} key={post.slug}>
          <a>{post.title}</a>
        </Link>
      </div>
    ))}
  </Layout>
);

export function getStaticProps() {
  const posts = getAllPosts(['slug', 'title']);
  return {
    props: { posts },
  };
}
