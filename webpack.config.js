const webpack = require('webpack')

const styleLoaderChain = `css-loader!resolve-url-loader!sass-loader?{"includePaths":["${__dirname}/src/assets/styles"],"sourceMap":true}`

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    publicPath: '/',
    path: `${__dirname}`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /scss$/,
        loader: `style-loader!${styleLoaderChain}`,
      },
      {
        test: /vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: `vue-style-loader!${styleLoaderChain}`,
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules', `${__dirname}`],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: `${__dirname}`,
    historyApiFallback: { index: '/' },
  },
}
