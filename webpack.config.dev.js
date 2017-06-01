'use strict';

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';

export default {
  devtool: 'inline-source-map',
  entry: [
    //path.resolve(__dirname, 'app', 'src', 'object.entries'),
    path.resolve(__dirname, 'app', 'src', 'code')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'app', 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // create html file that includes ref to bundled js
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app', 'src', 'index.html'),
      debug: true,
      inject: true
    }),
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}
