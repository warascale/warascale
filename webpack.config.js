const path = require('path');

const config = {
	entry: {
		app: './resource/js/app.js'
	},
	output: {
		path: path.resolve(__dirname, '/app/assets/js/'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	mode: 'development'
}

module.exports = config;