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
				test: /\.js$/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
}
