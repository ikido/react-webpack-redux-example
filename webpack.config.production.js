/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './javascripts/app',
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [
      path.resolve(__dirname, "javascripts"),
      path.resolve(__dirname, "stylesheets")
    ],
    extensions: ['', '.js', '.jsx', '.css']
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {        
        warnings: false
      },
      mangle: {
        keep_fnames: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin("../css/bundle.min.css")
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-decorators-legacy']
        }      
      },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize")
      },
    ]
  }
};
