import { BlogPostType } from '../types/BlogPostType'
import { getPost } from './getPost'
import { Converter } from 'showdown'
import showdownHighlight from 'showdown-highlight'

/**
 * MD to HTML converter
 */
const converter = new Converter({
  extensions: [showdownHighlight], // showdownHighlight adds code highlighting
})

/**
 * Return the post with its markdown content converted into html
 */
export function getPostDetails(slug: string): BlogPostType | undefined {
  // We retrive the post
  const post = getPost(slug)
  if (!post) {
    return
  }

  // We convert MarkDown into HTML
  const content = converter.makeHtml(post.content)

  return {
    ...post,
    content,
  }
}
