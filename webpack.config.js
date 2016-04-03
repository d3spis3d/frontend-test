module.exports = {
  entry: './app/app.js',
  output: {
      filename: './static/app.js'
  },
  resolve: {
      extensions: ['', '.webpack.js', '.js']
  },
  module: {
      loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
      ]
  }
}
