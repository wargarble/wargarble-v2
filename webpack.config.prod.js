// webpack.config.prod.js
const _ = {};
_.extend = require('lodash/fp/extend');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');

module.exports = _.extend(config, {
  devtool: 'source-map',
  entry: ['./global/js/main',],
  output: {
    path: path.join(__dirname, '_dist/js'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
});
