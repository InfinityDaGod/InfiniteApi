const fetch = require('node-fetch')
module.exports = {
  name: "anime/kiss",
  run: async(req, res) => {
    const r = await fetch("https://anime-api.hisoka17.repl.co/img/kiss")
    const data = r.json()
    res.json({ 
    image: data.url, 
    })
  }
}