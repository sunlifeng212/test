const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    jquery: ["jquery"],
    react: ["react"],
  },
  mode: "development",

  plugins: [
    new webpack.DllPlugin({
      name: "[name].[hash]",
      path: path.resolve(__dirname, "../dll/[name].manifest.json"),
    }),
  ],
  output: {
    library: "[name]_[hash]",
    filename: "[name].js",
    path: path.resolve(__dirname, "../dll"),
  },
};
