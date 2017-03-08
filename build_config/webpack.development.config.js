const { resolve } = require('path');
const webpack = require('webpack');
const shared = require('./shared');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './main.js',
  ],

  output: {
    filename: 'bundle.js',
    path: shared.dist,
    publicPath: '/',
  },

  context: shared.src,

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: shared.dist,
    publicPath: '/',
    historyApiFallback: true,
  },

  module: shared.module,

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.dev.html.ejs'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
