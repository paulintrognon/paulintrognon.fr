import { getPostDetails } from './getPostDetails'

// Mocking getPost
import { getPost } from './getPost'
jest.mock('./getPost')
const getPostMock = getPost as jest.Mock

const slug = 'super-slug'

describe('blog/services/getPosts', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    getPostMock.mockReturnValue(undefined)
  })

  it('should return undefined if post not found', () => {
    const detailedPost = getPostDetails(slug)
    expect(detailedPost).toEqual(undefined)
  })

  it('should retrieve post and parse its md content into html', () => {
    const post = {
      content: `_test_ **foo**
# title`,
    }
    getPostMock.mockReturnValue(post)
    const detailedPost = getPostDetails(slug)
    expect(detailedPost).toEqual({
      content: '<p><em>test</em> <strong>foo</strong></p>\n<h1 id="title">title</h1>',
    })
  })

  it('should highlight code snippets', () => {
    const post = {
      content: `
\`\`\`jsx
const foo = "bar";
\`\`\`
`,
    }
    getPostMock.mockReturnValue(post)
    const detailedPost = getPostDetails(slug)
    expect(detailedPost).toEqual({
      content:
        '<pre><code class="hljs jsx language-jsx"><span class="hljs-keyword">const</span> foo = <span class="hljs-string">&quot;bar&quot;</span>;\n</code></pre>',
    })
  })

  it('should add <a> tags for url', () => {
    const post = {
      content: "Visit https://plouf-plouf.fr it's awesome!",
    }
    getPostMock.mockReturnValue(post)
    const detailedPost = getPostDetails(slug)
    expect(detailedPost).toEqual({
      content:
        '<p>Visit <a href="https://plouf-plouf.fr">https://plouf-plouf.fr</a> it\'s awesome!</p>',
    })
  })
})
