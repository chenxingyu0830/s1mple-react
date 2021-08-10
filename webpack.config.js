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
				options: {
					esModule: false, // TIPS: 这里设置为false - 避免打包png加载失败
					name: '[name].[ext]',
					limit: 10240
				}
			}
		],
	},
};
