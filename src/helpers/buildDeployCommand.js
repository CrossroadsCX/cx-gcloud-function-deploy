module.exports = (settings, name) => {
  let command = `gcloud functions deploy ${name}`
  Object.keys(settings).forEach((setting) => {
    if (setting !== 'env') {
      command += ` --${setting} ${settings[setting]}`
    } else { // If we're dealing with and env array
      const { env } = settings
      command += ' --set-env-vars '
      Object.keys(env).forEach((key) => {
        command += `${key}=${env[key]},`
      })
      command = command.replace(/,\s*$/, '')
    }
  })

  command += ' --quiet'

  return command
}
