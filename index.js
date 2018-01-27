// index.js
const express = require("express")
const app = express()

app.get("/hello/:id", (req, res) => {
  console.log(req.params)
  res.send(`Hello, ${req.query.name}`+` profissão ${req.query.profession}`)
})

app.listen(3000)
console.log("server online!")