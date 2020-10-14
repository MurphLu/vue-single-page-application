const path = require("path");
const webpack = require('webpack');

const config = {
  entry: {
    app: path.resolve(__dirname, "../src/client-entry.js"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};

module.exports = config;