import fs from 'fs'
import { BlogPostType } from '../types/BlogPostType'
import { POSTS_DIRECTORY_PATH } from './postsDirectory'
import { getPost } from './getPost'

/**
 * Return all blog posts sorted by date
 */
export function getPosts(): BlogPostType[] {
  // We get all posts' slugs by getting posts file names and removing the .md extension
  const slugs = fs.readdirSync(POSTS_DIRECTORY_PATH).map((fileName) => fileName.slice(0, -3))

  // We retrieve all posts from the slugs, removing undefined
  const posts = slugs
    .map((slug) => getPost(slug))
    .filter((post): post is BlogPostType => Boolean(post))

  // We return the posts sorted from latest to oldest
  return posts.sort(
    (post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime()
  )
}
