const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    inject: 'body',
  })
];

module.exports = {

  entry: {
    app: './src/main.js'
  },

  output: {
    path: './dist',
    filename: '[name].[hash].js',
  },
  plugins: plugins,

  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
};
