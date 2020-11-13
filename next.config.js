module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
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
