// webpack.config.prod.js
const _ = {};
_.extend = require('lodash/fp/extend');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');
const entry = require('./webpack.manifest');

module.exports = _.extend(config, {
  devtool: 'source-map',
  entry: entry,
  output: {
    path: path.join(__dirname, '_dist'),
    filename: 'js/[name].min.js'
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
