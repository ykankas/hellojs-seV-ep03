// index2.js
const axios = require("axios")
const express = require("express")

const app = express()
const baseURL = "https://api.github.com"
const api = axios.create({ baseURL })

app.get("/seguidores/:username", (req, res) => {
    api.get(`/users/${req.params.username}/followers`)
        .then(ret => res.send(ret.data))
        .catch(err => res.status(500).send(err.response.data))
})



app.get("/busca", (req, res) => {
    const params = { q: req.query.user }
    api.get("/search/users", { params })
        .then(ret => res.send(ret.data))
        .catch(err => res.status(500).send(err.response.data))
})

app.listen(3000)
console.log("server online!")