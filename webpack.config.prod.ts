const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const dotenv = require('dotenv');

const config = {
	name: 'cromma',
	mode: 'production',
	devtool: 'hidden-source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@apis': path.resolve(__dirname, 'src/apis'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@stores': path.resolve(__dirname, 'src/stores'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@services': path.resolve(__dirname, 'src/services'),
		},
	},
	entry: {
		app: './src/index.tsx',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'@babel/preset-env',
							{
								targets: { browsers: ['last 2 chrome versions'] },
							},
						],
						'@babel/preset-react',
						'@babel/preset-typescript',
					],
				},
				exclude: ['/node_modules'],
			},
			{
				test: /\.css?$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(ico|png|jpg|jpeg|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
			{
				test: /\.(woff|woff2|ttf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				},
			},
		],
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production',
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(dotenv.config().parsed),
		}),
		new BundleAnalyzerPlugin({
			generateStatsFile: true,
			statsFilename: 'bundle-stats.json',
		}),
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.[name].[chunkhash].js',
		chunkFilename: 'chunk.[name].[chunkhash].js',
		publicPath: './',
		clean: true,
	},
	devServer: {
		historyApiFallback: true,
		port: 3000,
		open: true,
		compress: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
};
export default config;
