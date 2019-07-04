const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { Reviews } = require('../db/index')

const port = 3000

app.use(bodyParser.json())

//use static here to serve up html

app.listen(port, console.log(`listening on port${port}`))