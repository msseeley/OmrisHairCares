const { resolve } = require('path')
const LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true})
  ],
  entry: ['babel-polyfill', './app/main'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './app'),
        loader: 'babel-loader'
      }
    ]
  }
};
