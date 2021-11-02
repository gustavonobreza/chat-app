const path = require("path")
module.exports = {
  entry: "./index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  mode: "production",
  node: false,
  stats: 'minimal',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.m?js$/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-env"],
  //         },
  //       },
  //     },
  //     {
  //       test: /\.js$/,
  //       loader: "webpack-remove-debug", // remove "debug" package
  //     },
  //   ],
  // },
};
