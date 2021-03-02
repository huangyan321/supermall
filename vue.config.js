  module.exports = {
      // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views'
        }
      }
    }
  }