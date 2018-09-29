'use strict'
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: '../src/js/index.js',
  output: {
    path: path.join(__dirname, '/build/js'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
        {
          test: /\.vue$/,
          loader: 'vue-loader', // 'babel-loader' is also a valid name to reference
        }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};