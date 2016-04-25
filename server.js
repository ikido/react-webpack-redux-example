/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: path.resolve(__dirname, "dist"),
  hot: true,
  historyApiFallback: true
}).listen(5001, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:5001');
});
