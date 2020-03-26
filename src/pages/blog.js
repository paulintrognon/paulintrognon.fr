import Head from 'next/head';
import { attributes, react as BlogPostContent } from '../content/blog.md';

export default () => {
  const { title, cats } = attributes;
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <article>
        <h1>{title}</h1>
        <BlogPostContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};
