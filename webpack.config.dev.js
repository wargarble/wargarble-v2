const _ = require('lodash/core');
const config = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = _.extend(config, {
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, '_dist'),
    publicPath: '/',
    filename: 'js/[name].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  devServer: {
    contentBase: './_dist',
    hot: true,
  },
});
