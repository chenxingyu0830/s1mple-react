const path = require("path");
module.exports = {
	mode: "production",
	entry: {
		"s1mple-react": "./lib/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "dist/lib"),
		library: "s1mple-react",
		libraryTarget: "umd",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			},
		],
	},
};
