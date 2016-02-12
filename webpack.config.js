// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = require("./webpack.manifest");

module.exports = {
  context: __dirname,
	entry: entry,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  module: {
		preLoaders: [
			{
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        exclude: /\_dist/,
      },
		],
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
      },
      {
        test: /\.js?$|\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"],
    root: [ __dirname ],
  },
}
