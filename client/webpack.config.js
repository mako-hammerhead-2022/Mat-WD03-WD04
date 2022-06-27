const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.resolve('./client/index.js'),
  output: {
    path: path.resolve('./server/public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve('../server/public'),
  },
  plugins: [new Dotenv()],
}
