const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: rootPath + '/dist',
    filename: 'reactApp.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx$/, loader: "babel-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  devServer: {
    contentBase: rootPath,
  }
};