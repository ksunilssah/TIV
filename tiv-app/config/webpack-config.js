const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (environment) => {
	const isProduction = environment === 'production';
	return {
		mode: isProduction ? 'production' : 'development',
		entry: './src/index.js',
		devtool: isProduction ? false : 'source-map',
		output: {
			filename: 'js/[name].js',
			path: path.resolve('build'),
			chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
			publicPath: '/',
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
			},
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
						},
					},
				},
				{
					test: /\.(css|scss)$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								implementation: require('sass'),
							},
						},
					],
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
						},
					],
				}
			],
		},
		plugins: [
			new CopyPlugin({
				patterns: [
					{
						from: 'public/css',
						to: 'css'
					}, {
						from: 'public/fonts',
						to: 'fonts'
					}
				]
			}),
			new ESLintPlugin(),
			new MiniCssExtractPlugin({
				filename: 'css/[name].css',
				chunkFilename: 'css/[name].[contenthash:8].chunk.css',
			}),
			new HtmlWebpackPlugin({
				template: 'public/index.html',
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true,
					minifyCSS: true,
					minifyJS: true,
				},
			}),
		],
		performance: {
			hints: false,
		}
	};
};
