const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "production" }) =>
  webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js",
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
      ],
    },
    modeConfig(mode)
  );
