const withSass = require('@zeit/next-sass')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = withSass({
  cssModules: true,
  webpack: (config, { dev, isServer }) => {
    if (isServer) return config

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))

    return config
  }
})
