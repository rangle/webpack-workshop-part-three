const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Notifier = require('./plugins/notifier');

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    inject: 'body',
  }),
  new Notifier()
];


module.exports = {
  entry: {
    app: './src/main.js'
  },

  output: {
    path: './dist',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].js.map'
  },

  plugins: plugins,


  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ }
    ],
  },
};
