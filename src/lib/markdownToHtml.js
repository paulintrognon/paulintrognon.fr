import unified from 'unified';
import markdown from 'remark-parse';
import highlight from 'remark-highlight.js';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';

export default async function markdownToHtml(text) {
  const res = await unified()
    .use(markdown)
    .use(highlight)
    .use(remark2rehype)
    .use(html)
    .process(text);
  return res.contents;
}
