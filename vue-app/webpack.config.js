const path = require('path');
const rootPath = path.resolve(__dirname, '../');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  entry: __dirname + "/src/index.jx",
  output: {
    path: rootPath + '/dist',
    filename: 'vueApp.js'
  },
  resolve: {
    extensions: [".js", ".vue", ".json"]
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.js$/, loader: "babel-loader" }      
    ]
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    contentBase: rootPath,
  }
};