const fetch = require('node-fetch')
module.exports = {
  name: "anime/slap",
  run: async(req, res) => {
    const r = await fetch("https://anime-api.hisoka17.repl.co/img/slap")
    const data = r.json()
    res.json({ 
    image: data.url, 
    })
  }
}