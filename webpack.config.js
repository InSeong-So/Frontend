/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  devServer: {
    port: 5510,
    hot: true,
    open: true,
    historyApiFallback: true,
    watchFiles: ['src/**/*.ts', 'public/**/*'],
  },
  devtool: 'inline-source-map',
  target: ['es5', 'web'],
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[chunkhash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin({})],
    fallback: {
      fs: false,
      path: false,
      os: false,
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './assets/html/index.html'),
      favicon: './assets/icon/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
      'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, './tsconfig.json'),
            // skip typechecking for speed
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
