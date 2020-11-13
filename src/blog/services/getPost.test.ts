import { getPost } from './getPost'

// Mocking fs
import fs from 'fs'
jest.mock('fs')
const readFileSyncMock = fs.readFileSync as jest.Mock

const slug = 'super-post-slug'

describe('blog/services/getPost', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    readFileSyncMock.mockReturnValue(undefined)
  })

  it('should return undefined if no file found', () => {
    const post = getPost(slug)
    expect(post).toBe(undefined)
  })

  it('should retrieve the file from filesystem and parse it using gray-matter', () => {
    const file = `---
title: Great title
excerpt: Super excerpt
date: '2020-11-06T23:21:41.123Z'
---
super content of death`
    readFileSyncMock.mockReturnValueOnce(file)
    const post = getPost(slug)

    expect(post).toEqual({
      slug,
      title: 'Great title',
      excerpt: 'Super excerpt',
      date: '2020-11-06T23:21:41.123Z',
      content: 'super content of death',
    })
  })
})
