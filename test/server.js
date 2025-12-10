const express = require("express")
const pool = require("./db")
const app = express()

app.use(express.static("public"))
app.use(express.json())

