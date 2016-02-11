const path = require("path");
const webpack = require("webpack");
const prod = JSON.parse(process.env.PROD_DEV || "0");

module.exports = {
  context: __dirname,
	entry: {
		main: "./global/js/main",
	},
	exclude: /(node_modules|bower_components)/,
	loader: 'babel',
	output: {
		path: path.join(__dirname, "_dist"),
		filename: prod ? "js/[name].min.js" : "js/[name].js",
	},
	plugins: prod ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ] : [],
	query: {
		presets: ['react', 'es2015']
	},
	test: /\.js?$|\.jsx?$/,
};
