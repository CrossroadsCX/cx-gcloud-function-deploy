const logger = require('./helpers/logger')
const { buildFunctions } = require('./helpers')

exports.command = 'build'

exports.describe = 'Babel build src > lib'

exports.handler = async () => {
  logger.log('Building functions...')
  const logs = await buildFunctions()
  logger.log(logs)

  return true
}
