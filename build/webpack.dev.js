// 生成最终dist版本，
const path = require("path")
const webpack = require("webpack")
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Webpack = require("webpack")
process.env.NODE_ENV = "development"
let prodConfig = {
    devtool: 'source-map',
    mode: 'development',
    plugins: [

        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['You application is running here http://127.0.0.1:8888'],
                // notes: ['Some additionnal notes to be displayed unpon successful compilation']
            },
            onErrors: function (severity, errors) {
                // You can listen to errors transformed and prioritized by the plugin
                // severity can be 'error' or 'warning'
            },
            // should the console be cleared between each compilation?
            // default is true
            clearConsole: true,

            // add formatters and transformers (see below)
            additionalFormatters: [],
            additionalTransformers: []
        }),
        // function () {
        //     this.hooks.done.tap("done", (stats) => {
        //         console.log(stats.compilation)
        //     })
        // },
        new Webpack.DefinePlugin({
            // ENV: "'dev'",  
            ENV: 1
        }),

        new webpack.HotModuleReplacementPlugin(),
        // new MiniCssExtractPlugin({
        //     // 类似 webpackOptions.output里面的配置 可以忽略
        //     filename: 'css/[name].[contenthash:8].css',
        //     chunkFilename: '[id].css'
        // })

    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: "127.0.0.1",
        port: 8888,
        hot: true,
        //只显示基本信息
        quiet: true,
        //不要显示启动服务器日志
        // clientLogLevel: 'silent'
        clientLogLevel:"none",
        //不要全屏提示
        // overlay:false,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                //找到package.json 根据环境变量改变兼容方式
                                require('postcss-preset-env')()
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    stats: "errors-only"
};
module.exports = merge(common, prodConfig);