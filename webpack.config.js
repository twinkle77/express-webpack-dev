const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ["webpack-hot-middleware/client?reload=true", "./client/main.js"],
  output: {
    path: path.join(__dirname, './server/public'),
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html",
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
