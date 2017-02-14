const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    sourceMapFilename: '[name].[hash].js.map'
  },
  plugins: plugins,
  module: {
    rules: [
      { test: /\.css$/, loaders: ['style-loader','css-loader'] },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,
        options: {
          presets: [["es2015"]]
        }
      },
    ],
  },
};
