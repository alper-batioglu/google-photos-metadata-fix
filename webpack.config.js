const webpackProd = require("./webpack.config.prod");
const WebpackBar = require('webpackbar');

const webpackDev = {
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  plugins: [
    new WebpackBar(),
  ],
};

webpackProd.devtool = webpackDev.devtool;
webpackProd.mode = webpackDev.mode;
webpackDev.module.rules.forEach(rule => webpackProd.module.rules.push(rule));
webpackDev.plugins.forEach(plugin => webpackProd.plugins.push(plugin));

module.exports = webpackProd;