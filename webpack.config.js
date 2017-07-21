const Path = require('path');
const Webpack = require('webpack');
const ExamplePlugin = require('./ExamplePlugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: Path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.jpe?g$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	plugins: [
		new ExamplePlugin(),
		new Webpack.optimize.UglifyJsPlugin(),
		new Webpack.ContextReplacementPlugin()
	]
}
