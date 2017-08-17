/* global __dirname, module, require */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: 'body'
});

const UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin();

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      { test: /\.js$/, exclude: ['node_modules'], loader: 'babel-loader' }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    UglifyJsPluginConfig
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  }
};