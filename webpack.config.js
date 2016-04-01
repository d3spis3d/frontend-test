module.exports = {
  entry: './app/app.ts',
  output: {
      filename: './dist/bundle.js'
  },
  resolve: {
      extensions: ['', '.webpack.js', '.ts', '.js']
  },
  module: {
      loaders: [
          { test: /\.ts$/, loader: 'ts-loader' }
      ]
  }
}
