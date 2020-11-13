import { getPosts } from './getPosts'

// Mocking fs
import fs from 'fs'
jest.mock('fs')
const readdirSyncMock = fs.readdirSync as jest.Mock

// Mocking getPost
import { getPost } from './getPost'
jest.mock('./getPost')
const getPostMock = getPost as jest.Mock
const post1 = { date: '01.01.2020' }
const post2 = { date: '01.01.2021' }

describe('blog/services/getPosts', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    getPostMock.mockReturnValue(undefined).mockReturnValueOnce(post1).mockReturnValueOnce(post2)
  })

  it('should return an empty array if no files returned by fs', () => {
    readdirSyncMock.mockReturnValue([])
    const posts = getPosts()
    expect(posts).toEqual([])
  })

  it('should return a list of posts from md files, ordered by date', () => {
    readdirSyncMock.mockReturnValue(['first-file.md', 'second-file.md'])
    const posts = getPosts()
    expect(readdirSyncMock.mock.calls.length).toBe(1)
    expect(getPostMock.mock.calls.length).toBe(2)
    expect(getPostMock.mock.calls[0]).toEqual(['first-file'])
    expect(getPostMock.mock.calls[1]).toEqual(['second-file'])
    expect(posts.length).toEqual(2)
    expect(posts[0]).toBe(post2)
    expect(posts[1]).toBe(post1)
  })

  it('should not return missing files', () => {
    readdirSyncMock.mockReturnValue(['first-file.md', 'second-file.md', 'missing file'])
    const posts = getPosts()
    expect(getPostMock.mock.calls.length).toBe(3)
    expect(posts.length).toEqual(2)
    expect(posts[0]).toBe(post2)
    expect(posts[1]).toBe(post1)
  })
})
