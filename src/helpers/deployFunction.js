const { exec } = require('child_process')

const buildDeploySettings = require('./buildDeploySettings')
const buildDeployCommand = require('./buildDeployCommand')

module.exports = (name, functionNames) => {
  const settings = buildDeploySettings(name)

  // Check that the function exists
  if (!functionNames.includes(name)) {
    throw new Error(`Function ${name} does not exist.`)
  }

  const command = buildDeployCommand(settings, name)

  console.log('Deploying: ')
  console.log(command)

  const execProcess = exec(command)
  execProcess.stdout.pipe(process.stdout)
  execProcess.stderr.pipe(process.stderr)
}
