import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { BlogPostType } from '../types/BlogPostType'
import { POSTS_DIRECTORY_PATH } from './postsDirectory'

/**
 * Returns a blog post corresponding to given blog post slug
 * Or undefined if no corresponding blog post found
 * @param slug blog post slug
 */
export function getPost(slug: string): BlogPostType | undefined {
  // We get the post's local path
  const fullPath = join(POSTS_DIRECTORY_PATH, `${slug}.md`)

  // We read the file's content
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // If the file has not been found, we return undefined
  if (!fileContents) {
    return
  }

  // We parse the file's content to separate metadata/content
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    content,
  }
}
