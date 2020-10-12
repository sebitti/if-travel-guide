const output = {
  globalObject: 'this'
}

const publicPath = process.env.WEBPACK_PUBLIC_PATH || '/'

module.exports = {
  publicPath,
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    },
    output
  },
  pluginOptions: {
    i18n: {
      locale: 'ukr',
      fallbackLocale: 'ukr',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .use('file-loader')
      .loader('vue-svg-loader')
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
  }
}
