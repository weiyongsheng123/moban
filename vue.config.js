const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
const name = '七天api管理'; // page title
module.exports = {

  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.resolve.alias
      .set('@', resolve('src'));
  },
  devServer: {
    port: 233,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PROXY,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name,
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/xr-theme.scss'),
      ],
    },
  },
};
