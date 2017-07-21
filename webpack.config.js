const Path = require('path');

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
	}
}
