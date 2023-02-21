const path = require('path');
const copyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    program: './src/program.ts'
  },
  watch: false,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ]
  },
  plugins: [
    // new copyPlugin({
    //   patterns: [
    //     { from: "./artifacts" }
    //   ]
    // })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.styl']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bin/'),
    libraryTarget: 'umd',
    library: 'program',
    globalObject: "global",
    clean: true
  }
};