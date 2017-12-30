module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname +'/build', //Absolute path is required
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}
