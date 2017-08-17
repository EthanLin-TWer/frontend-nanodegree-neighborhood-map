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
      { test: /\.js$/,   loader: 'babel-loader', exclude: ['node_modules'] },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
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