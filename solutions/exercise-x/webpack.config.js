const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');

const plugins = [
  new SplitByPathPlugin([{ 
    name: 'vendor', 
    path: ['node_modules']
  }]),
  new HtmlWebpackPlugin({
    template: './index.html',
    inject: 'body',
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    })
  );
}

module.exports = {

  entry: {
    app: './src/main.js'
  },

  output: {
    path: './dist',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].js.map'
  },

  devtool: 'source-map',
  plugins: plugins,

  devServer: {
    historyApiFallback: true
  },

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader' }
    ],
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ],
  },
};
