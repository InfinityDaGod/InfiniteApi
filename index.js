// ------ PACKAGE IMPORTS ------ //

const express = require('express')
const app = express()
const rateLimit = require ("express-rate-limit")
const port = 3000;

// ------ RATE LIMITER ------ //

const limiter = rateLimit({
    windowMs: 100 * 60 * 100, // 10 minutes
    max: 100, // 100 requests max every 10 minutes
    message:"You are sending too many requests. Please try again later."
})

// ------ ROUTES HANDLER ------ //

require("./routes")(app)

app.get('/', (req, res) => {
    res.sendFile('/home/runner/InfiniteApi/src/website/pages/index.html')
})


app.listen(
port,
() => console.log(`hmm... | Port: ${port}`)
)
app.set('json spaces', 1);