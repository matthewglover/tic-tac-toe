const { resolve } = require('path');
const webpack = require('webpack');
const shared = require('./shared');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    main: './main.js',
    vendorReact: [
      'react',
      'react-dom',
      'react-hot-loader',
    ],
    vendorRedux: [
      'redux',
      'react-redux',
    ],
    vendorReactRouter: [
      'react-router',
    ],
    vendorReduxObservable: [
      'rxjs',
      'redux-observable',
    ],
  },

  output: {
    filename: '[chunkhash].[name].js',
    path: `${shared.dist}/public`,
  },

  context: shared.src,

  devtool: 'cheap-module-source-map',

  module: shared.module,

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html.ejs'),
      inject: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendorReact',
        'vendorRedux',
        'vendorReactRouter',
        'vendorReduxObservable',
        'manifest',
      ],
    }),
  ],
};
