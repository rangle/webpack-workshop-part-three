const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const csvLoader = require('./loaders/csv-loader');
const path = require("path");
// const dsvLoader = require('dsv-loader');

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
  resolveLoader: {
     modules: ['node_modules', 'loaders']
  },

  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.csv$/, loaders: ['csv-loader'], exclude: /node_modules/ }
    ],
  },
};


// resolveLoader: {
//   alias: {
//     "csv-loader": path.join(__dirname, "loaders/csv-loader")
//   }
// },
