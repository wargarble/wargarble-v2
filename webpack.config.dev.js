// webpack.config.dev.js
const _ = {};
_.extend = require('lodash/fp/extend');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');
const extend =

module.exports = _.extend(config, {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './global/js/main',
  ],
  output: {
    path: path.join(__dirname, '_dist/js'),
    filename: 'bundle.js',
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
