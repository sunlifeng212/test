// 生成最终dist版本，
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const speed = require("speed-measure-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const webpackbar = require("webpackbar");
// const smp = new speed()

process.env.NODE_ENV = "production";
let prodConfig = {
  mode: "production",
  // devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[hash:6].js", //hash chunkhash contenthash(推荐)
    publicPath: './public',
    chunkFilename: "component/[name].[hash:6]_chunk.js", //费入口chunk node——modules  通过improt引入的js
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                //找到package.json 根据环境变量改变兼容方式
                require("postcss-preset-env")(),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.sass$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpackbar(),
    // new BundleAnalyzerPlugin(),//运行在8888端口的代码分析
    //不打包这些库，并且以自动引入html
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: "vue",
    //       entry: "https://unpkg.com/vue@2.6.10/dist/vue.js",
    //       global: "Vue",
    //     },
    //     {
    //       module: "react",
    //       entry: "https://unpkg.com/react@16/umd/react.production.min.js",
    //       global: "React",
    //     },
    //     {
    //       module: "react-dom",
    //       entry:
    //         "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
    //       global: "ReactDOM",
    //     },
    //   ],
    // }),
    //压缩css
    new OptimizeCssAssetsWebpackPlugin(),
    //生产环境配置 分离css
    new MiniCssExtractPlugin({
      // 类似 webpackOptions.output里面的配置 可以忽略
      filename: "css/[name]-[id].[contenthash:8].css",
      // chunkFilename: '[id].css'
    }),
    // 生成pwa
    new WorkboxWebpackPlugin.GenerateSW({
      //1.帮助serviceworker快速启动
      //2.删除旧的serviceworker
      clientsClaim: true,
      skipWaiting: true,
    }),
    //告诉webpack哪些库不参与打包，同时使用时名字要改
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dll/jquery.mainfest.json')
    // }),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dll/react.mainfest.json')
    // }),
    //引入mainfest的资源引入到html
    // new AddAssetHtmlWebpackPlugin({
    //   filepath: path.resolve(__dirname, 'dll/jquery.js')
    // }),
    // new AddAssetHtmlWebpackPlugin({
    //   filepath: path.resolve(__dirname, 'dll/react.js')
    // })
  ],
  /*
  单独打包node_modules
  多入口文件如果公共依赖会单独打包（比如jq）
  */
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        common: {
          test: /(react|react-dom)/,
          // name: "react",
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    // splitChunks: {
    //   chunks: "all",
    //   // 默认值，可以不写~
    //   minSize: 30 * 1024, // 分割的chunk最小为30kb
    //   maxSiza: 0, // 最大没有限制
    //   minChunks: 1, // 要提取的chunk最少被引用1次
    //   maxAsyncRequests: 5, // 按需加载时并行加载的文件的最大数量
    //   maxInitialRequests: 3, // 入口js文件最大并行请求数量
    //   automaticNameDelimiter: "~", // 名称连接符
    //   name: true, // 可以使用命名规则
    //   cacheGroups: {
    //     // 分割chunk的组
    //     // node_modules文件会被打包到 vendors 组的chunk中。--> vendors~xxx.js
    //     // 满足上面的公共规则，如：大小超过30kb，至少被引用一次。
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       // 优先级
    //       priority: -10,
    //     },
    //     default: {
    //       // 要提取的chunk最少被引用2次
    //       minChunks: 2,
    //       // 优先级
    //       priority: -20,
    //       // 如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
    //       reuseExistingChunk: true,
    //     },
    //   },
    // },
    // splitChunks: {
    //   chunks: "all",
    //   minSize: 30000, //最小30k
    //   maxSize: 0, //最大没有限制
    //   minRemainingSize: 0,
    //   minChunks: 1, //最小的引用次数
    //   maxAsyncRequests: 6, //按需加载时并行加载的最大数量
    //   maxInitialRequests: 4, //入口文件的最大数量
    //   automaticNameDelimiter: "~", //命名连接符
    //   name: true, //可以使用命名规则
    //   cacheGroups: {
    //     // 分割为几组chunk并且满足以上要求
    //     commons: {
    //       test: /(react|react-dom)/,
    //       name: "react",
    //       chunks: "all", //同步引入和异步引入
    //     },
    //     defaultVendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       minChunks: 1,
    //       priority: -10, // 优先级
    //     },
    //     default: {
    //       minChunks: 2,
    //       priority: -20,
    //       reuseExistingChunk: true, //如果当前打包的模块和之前已经是同一个就会复用
    //     },
    //   },
    // },
    //当前模块的记录与其他文件的hash单独打包一个runtime文件
    // runtimeChunk: {
    //   name: (entrypoint) => {
    //     `runtimechunk${entrypoint.name}`;
    //   },
    // },

    //配置生产压缩方案
    minimizer: [
      new TerserWebpackPlugin({
        cache: true,
        parallel: true, //多j=进程
        sourceMap: true, //启用后不会被打包压缩掉
      }),
    ],
  },
  //不打包node_modules的依赖 通常使用cdn
  // externals: {
  //   "jquery": 'jQuery',
  //   "react": 'react',
  //   "react-dom": "ReactDOM"
  // },
};
// smp.wrap(merge(common, prodConfig))
module.exports = merge(common, prodConfig);
// module.exports =smp.wrap(merge(common, prodConfig))
