// webpack.config.dev.js
const _ = {};
_.extend = require('lodash/fp/extend');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');

module.exports = _.extend(config, {
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, '_dist/js'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
});
