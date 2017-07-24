const Path = require('path');
const ClearDistPlugin = require('./ClearDist');

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
						loader: 'file-loader',
						query: {
							name: '[name]-[hash].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new ClearDistPlugin()
	]
}
