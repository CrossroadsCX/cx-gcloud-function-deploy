const { exec } = require('child_process')

module.exports = async () => {
  const command = 'yarn run build'

  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        return reject(err)
      }

      return resolve(stdout || stderr)
    })
  })
}
