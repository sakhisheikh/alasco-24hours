/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: ['@babel/polyfill', APP_DIR],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.(scss|css)$/,
            use: [
              'css-hot-loader', MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(VERSION),
          'process.env.PLATFORM': JSON.stringify(PLATFORM)
        }),
        new MiniCssExtractPlugin({
          filename: PLATFORM === 'production' ? 'style.[contenthash].css' : 'style.css',
        }),
      ],
      resolve: {
        extensions: ['.js', '.scss'],
        modules: [APP_DIR, 'node_modules'],
        descriptionFiles: ["package.json"],
        alias: {
          api: path.resolve(APP_DIR, 'api'),
          components: path.resolve(APP_DIR, 'components'),
          assets: path.resolve(APP_DIR, 'assets')
        },
      },
    }
  ])
};
