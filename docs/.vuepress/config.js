const path = require('path');
const resolve = path.resolve;

module.exports = {
  title: 'Hello Architect',
  description: 'architect——自由构建你的H5网页',

  dest: 'dist',

  markdown: {
    lineNumbers: false
  },

  evergreen: true,

  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve(__dirname, 'assets')
      }
    }
  }
}
