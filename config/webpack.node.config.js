var path = require('path');
var merge = require('webpack-merge');
const webpack = require('webpack');


module.exports = merge([
  {
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].chunk.bundle.js',
      path: path.resolve(__dirname, '..', 'build'),
      publicPath: '/',
    },
  }
]);
