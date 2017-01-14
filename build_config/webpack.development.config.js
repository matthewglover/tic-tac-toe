const webpack = require('webpack');
const shared = require('./shared');

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
    ...shared.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
