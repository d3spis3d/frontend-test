var webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
      filename: './static/app.js'
  },
  resolve: {
      extensions: ['', '.js']
  },
  module: {
      loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
      ]
  },
  plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({ minimize: true, output: { comments: false }})
  ]
}
