const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ?
  './' :
  '/'


module.exports = {
  css: { // 配置css模块
    loaderOptions: { // 向预处理器 Loader 传递配置选项
      less: { // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('#', resolve('src/components'))
  },

  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true, //console
              drop_debugger: false,
              pure_funcs: ['console.log'] //移除console
            }
          }
        })
      ]
    }
  },
  productionSourceMap: true,

  baseUrl: BASE_URL,
  lintOnSave: false,
  outputDir: 'beesbit',
  assetsDir: 'assest',
  pluginOptions: { // 第三方插件配置
  },
  runtimeCompiler: true,
  productionSourceMap: true,
}
