const webpack = require('webpack');
const shared = require('./shared');

module.exports = {
  entry: {
    main: './main.js',
    vendor: [
      'react',
      'react-dom',
      'react-hot-loader',
      'rxjs',
      'redux-observable',
      'react-router',
      'redux',
      'react-redux',
    ],
  },

  output: {
    filename: '[chunkhash].[name].js',
    path: shared.dist,
    publicPath: '/',
  },

  context: shared.src,

  devtool: 'cheap-module-source-map',

  module: shared.module,

  plugins: [
    ...shared.plugins,
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
};
