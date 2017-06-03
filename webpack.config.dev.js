'use strict';

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import Entries from './build/entries';

export default {
  devtool: 'inline-source-map',
  entry: Entries.getEntries({ staticIfNoDynamic: true }),
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
