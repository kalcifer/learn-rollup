module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: 'main.min.js',
    path: __dirname + '/build/js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
