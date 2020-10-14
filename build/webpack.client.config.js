const base = require('./webpack.base.config')

module.exports = Object.assign({}, base, {
  plugins: base.plugins || []
})
