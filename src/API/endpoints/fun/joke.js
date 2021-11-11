const fetch = require('node-fetch')
module.exports = {
  name: 'fun/joke',
  run: async (req, res, client) => {
    const x = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(y => y.json())
    .catch(() => null)
    res.json({
      joke: x.joke
    })   
 }
}