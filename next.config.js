module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/post/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ]
  },
}
