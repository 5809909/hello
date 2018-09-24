const path = require('path');
const webpack = require('webpack');
const publicPath = '/public/';
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

	entry: './index.js',
	devtool: 'cheap-module-source-map',

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Netflix Search',
			template: __dirname + '/src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],

	output: {
		path: path.join(__dirname, publicPath),
		filename: '[name].bundle.js',
		publicPath: publicPath,
		sourceMapFilename: '[name].map',
	},

	devServer: {
		port: 3000,
		host: 'localhost',
		historyApiFallback: true,
		noInfo: false,
		stats: 'minimal',
		publicPath: publicPath,
		contentBase: path.join(__dirname, publicPath),
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[path][name].[hash].[ext]",
					},
				},
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loaders: ["babel-loader"]
			}]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};