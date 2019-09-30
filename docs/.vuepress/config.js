const path = require('path');
const resolve = path.resolve;

module.exports = {
  title: 'Hello Architect',
  description: 'architect——自由构建你的H5网页',

  base: '/architect-document/public/',
  dest: 'public',

  markdown: {
    lineNumbers: false
  },

  evergreen: true,

  themeConfig: {
    // 侧边栏
    sidebar: [

    ]
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve(__dirname, 'assets')
      }
    }
  }
}
