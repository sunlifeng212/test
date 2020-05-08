
const TerserPlugin = require("terser-webpack-plugin")
module.exports = {
    mode: "none",
    entry: {
        "demo": "./index.js",
        "demo.min": "./index.js"
    },
    module: {
        rules: []
    },
    plugins: [],
    output: {
        filename: "[name].js",
        library: "MyLibrary",
        libraryExport: "default",
        libraryTarget: "umd"//通过amg cmd 标签引入
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,

            })
        ]
    },
}