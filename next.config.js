const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    });
    return cfg;
  },
});
