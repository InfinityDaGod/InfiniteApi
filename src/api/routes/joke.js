const fetch = require('node-fetch')

module.exports = {
  name: "fun/joke",
  run: async(req, res) => {
    const r = await fetch("https://api.carrotfishdev.repl.co/joke")
    const x = await r.json()
    res.json({ 
      joke: x.joke
    })
  }
}