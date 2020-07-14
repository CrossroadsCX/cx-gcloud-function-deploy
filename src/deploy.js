const inquirer = require('inquirer')

const { buildFunctions, deployFunction } = require('./helpers')
const logger = require('./helpers/logger')
const functions = require('../index')

exports.command = 'deploy [name]'

exports.describe = 'Deploy a function'

exports.handler = async (argv) => {
  logger.log('Building functions...')
  const logs = await buildFunctions()
  logger.log(logs)

  // Grab all function names as an array
  const functionNames = Object.keys(functions)

  // Get the input function name
  const { name } = argv

  let names

  if (!name) {
    const answers = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'names',
        choices: functionNames,
      },
    ])

    names = answers.names
  } else {
    names = [name]
  }

  names.forEach((functionName) => {
    deployFunction(functionName, functionNames)
  })

  return true
}
