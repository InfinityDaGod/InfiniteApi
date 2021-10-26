const fetch = require('node-fetch')
module.exports = {
  name: "anime/punch",
  run: async(req, res) => {
    const r = await fetch("https://anime-api.hisoka17.repl.co/img/punch")
    const data = r.json()
    res.json({ 
    image: data.url, 
    })
  }
}