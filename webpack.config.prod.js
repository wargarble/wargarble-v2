const _ = require('lodash/core');
const config = require('./webpack.config');
const path = require('path');
const webpack = require('webpack');

module.exports = _.extend(config, {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '_dist'),
    filename: 'js/[name].min.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
  ],
});
