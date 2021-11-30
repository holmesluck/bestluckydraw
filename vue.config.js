module.exports = {
  // 选项
  // publicPath: process.env.NODE_ENV === 'production' ? '/lucky-draw' : '/',
  publicPath: './',
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  //文件名哈希
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [ /* string or regex */],
  productionSourceMap: true,
  crossorigin: "",
  integrity: false,
  configureWebpack: () => { }, //(Object | Function)
  chainWebpack: () => { },
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8088,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      '/devApi': {
        target: "http://1.116.168.64:8090/",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/devApi": ""
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }, // string | Object
    before: () => { }
  },
  // 三方插件的选项
  pluginOptions: {
    // ...
  }
};



