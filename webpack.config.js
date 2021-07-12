const path = require("path");
module.exports = {
	entry: {
		index: "./lib/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "dist/lib"),
		library: "s1mple-react",
		libraryTarget: "umd",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			},
			{
				test: /icons.+\.svg$/,
				loader: 'svg-sprite-loader',
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', "sass-loader"]
			}
		],
	},
};
