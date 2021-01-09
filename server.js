const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: '/',
  hot: false,
  historyApiFallback: true,
  quiet: false,
  stats: { colors: true },
  inline: false,
  compress: true,
}).listen(8090, '0.0.0.0', (error) => {
  if (error) {
    return console.log(error)
  }
  console.log('Listening at http://0.0.0.0:8090/')
})
