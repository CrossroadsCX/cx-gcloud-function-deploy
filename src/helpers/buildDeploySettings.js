const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

module.exports = (name) => {
  const settings = yaml.safeLoad(
    fs.readFileSync(
      path.resolve(__dirname, '../../deployment.yml'),
      'utf-8',
    ),
  )

  const { defaults } = settings
  const functionSettings = settings[name]

  const deploySettings = {
    ...defaults,
    ...functionSettings,
  }

  return deploySettings
}
