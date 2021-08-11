const base = require("./webpack.config");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = Object.assign({}, base, {
	mode: "development",
	devtool: 'source-map',
	entry: {
		example: "./example.tsx",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
			favicon: "./favicon.ico"
		}),
	],
});
