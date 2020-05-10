const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const webpack = require('webpack')
// const demo = require("./webpack.demo.plugin")
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//在生产环境开启 tree shaking 去除无用代码
//在package.json  sideEffects:false 表示所有代码都是没副作用的都可tree shaking开启后会把css文件去掉 中"sideEffects": ["*.css"]
module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../ddd'),
    filename: '[name].js', //hash chunkhash contenthash(推荐)
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          name: '[hash:8].[ext]',
          limit: 8 * 1024,
          outputPath: 'img'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          // 开启多进程打包
          {
            loader: 'thread-loader',
            options: {
              workers: 2 //开启俩个进程
            }
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: 'usage',
                    corejs: {
                      version: 3
                    },
                    targets: {
                      chrome: '60'
                    }
                  }
                ]
              ],
              // 开启bable缓存
              cacheDirectory: true
            }
          }
        ]
      },
      // {
      //   //设置检查规则airbnb
      //   // eslint eslint-config-airbnb-base eslint-plugin-import
      //   test: /\.js$/,
      //   enforce: "pre",
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      //   options: {
      //     "fix": true,
      //     formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
      //   }
      // },

    ]
  },
  plugins: [
    // new demo(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      chunks: ["index"],
      minify: {
        collapseInlineTagWhitespace: true,
        removeComments: true
      }
    }),
    new CleanWebpackPlugin(),

  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src")
    },
    extensions: [".js", ".json", ".css", ".less"],
    modules: [path.resolve(__dirname, "../node_modules"), "node_modules"]
  }
  // stats: "errors-only"
}
