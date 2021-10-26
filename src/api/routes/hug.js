const fetch = require('node-fetch')

module.exports = {
  name: "anime/hug",
  run: async(req, res) => {
    const r = await fetch("https://anime-api.hisoka17.repl.co/img/hug")
    const x = r.json()
    res.json({ 
    image: x.url
    })
  }
}