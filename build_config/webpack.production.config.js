const webpack = require('webpack');
const shared = require('./shared');

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
    path: shared.dist,
    publicPath: '/',
  },

  context: shared.src,

  devtool: 'cheap-module-source-map',

  module: shared.module,

  plugins: [
    ...shared.plugins,
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
