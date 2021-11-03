const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const pages = ["index"];

/**
 * @type {webpack.Configuration}
 */
const configs = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.ts`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  target: ["web", "es7"],
  stats: "verbose",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 80,
    open: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),
};

// if (process.env.NODE_ENV !== "production") {
//   configs.plugins.push(
//     new webpack.SourceMapDevToolPlugin({ publicPath: "./dist" })
//   );
// }

module.exports = configs;
