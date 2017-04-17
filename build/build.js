require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var fs = require('fs')
var path = require('path')
const srcDir = path.resolve(__dirname, '../dist')
const dstDir = path.resolve(__dirname, '../../../../dist/2017/vue-pageflow') // 修改

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    // 复制目录
    exists(srcDir, dstDir, copy)
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})

/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
var copy = function (src, dst) {
  // 读取目录中的所有文件/目录
  fs.readdir(src, function (err, paths) {
    if (err) {
      throw err
    }
    paths.forEach(function (path) {
      var _src = src + '/' + path
      var _dst = dst + '/' + path
      var readable
      var writable     
      fs.stat(_src, function (err, st) {
        if (err) {
          throw err
        }
        // 判断是否为文件
        if (st.isFile()) {
          // 创建读取流
          readable = fs.createReadStream(_src)
          // 创建写入流
          writable = fs.createWriteStream(_dst)
          // 通过管道来传输流
          readable.pipe(writable)
        } else if (st.isDirectory()) { // 如果是目录则递归调用自身
          exists(_src, _dst, copy)
        }
      })
    })
  })
}

// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function (src, dst, callback) {
  fs.exists(dst, function (exists) {
    if (exists) {
      // 已存在
      rm(path.join(dst, 'static'), err => {
        if (err) throw err
        callback(src, dst)
      })
    } else {
      // 不存在
      fs.mkdir(dst, function () {
        callback(src, dst)
      })
    }
  })
}
