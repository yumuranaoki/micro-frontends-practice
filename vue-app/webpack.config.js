const path = require('path');
const rootPath = path.resolve(__dirname, '../');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: rootPath + '/dist',
    filename: 'vueApp.js'
  },
  resolve: {
    extensions: [".js", ".vue"],
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
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