var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		"main": "./js/main.js",
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		// publicPath: '/dist/',
		filename: '[name].js'
	},
	module: {
		rules: [{
        test: /\.css$/,
        use: [
        	{ loader: "style-loader" },
        	{ loader: "css-loader" }
        ]
      }]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			template: 'index.html'
		})
	],
	devtool: '#eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, "./"),
		disableHostCheck: true,
	}
}