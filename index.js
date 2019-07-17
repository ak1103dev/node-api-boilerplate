// eslint-disable-next-line no-global-assign
require = require('esm')(module)
require('./src/config')

module.exports = require('./src/bin/server')
