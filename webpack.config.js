/* global __dirname, module, require */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      { test: /\.js$/, exclude: ['node_modules'], loader: 'babel-loader' }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  }
};