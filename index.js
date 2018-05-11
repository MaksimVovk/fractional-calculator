const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const app = express()

const compiler = webpack(webpackConfig)
const instance = webpackDevMiddleware(compiler, { noInfo: true, lazy: false })
app.use(instance)
app.use(webpackHotMiddleware(compiler))
app.use(express.static(`${__dirname}`))
app.use((req, res, next) => res.sendFile(`${__dirname}/index.html`))

const server = app.listen(8080)

process.on('SIGINT', () => {
  server.close()
  instance.close()
})
