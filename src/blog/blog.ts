import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { BlogPostType } from './types/BlogPostType'

const postsDirectory = join(process.cwd(), 'src/blog/posts')

/**
 * Returns a blog post corresponding to given blog post slug
 * Or undefined if no corresponding blog post found
 * @param slug blog post slug
 */
export function getPostBySlug(slug: string): BlogPostType | undefined {
  const fullPath = join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  if (!fileContents) {
    return
  }
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    content,
  }
}

/**
 * Return all blog posts sorted by date
 */
export function getAllPosts(): BlogPostType[] {
  const slugs = fs.readdirSync(postsDirectory).map((fileName) => fileName.slice(0, -3))
  return slugs
    .map((slug) => getPostBySlug(slug) as BlogPostType)
    .sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime())
}
