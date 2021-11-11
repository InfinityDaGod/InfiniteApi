const fs = require('fs')
const chalk = require('chalk')
module.exports = (app, client) => {
  fs.readdirSync('/home/runner/InfiniteApi/src/API/endpoints/').forEach((dir) => {
    const enpoints = fs.readdirSync(`/home/runner/InfiniteApi/src/API/endpoints/${dir}/`)
    for (let files of enpoints) {
      let pull = require(`/home/runner/InfiniteApi/src/API/endpoints/${dir}/${files}`)
      client.endpoints.set(pull.name, pull)
      app.get(`/${pull.name}`, (req, res) => {
        pull.run(req, res, client).catch((err) => res.json({
          error: err
        }))
   console.log(`Enpoints => ${chalk.blue(pull.name)}`)
      })
    }
  })
}