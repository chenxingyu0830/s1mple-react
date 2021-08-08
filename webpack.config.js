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
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', "sass-loader"],
			},
			{
				test: /\.png|jpg|jpeg$/,
				loader: 'file-loader',
			}
		],
	},
};
