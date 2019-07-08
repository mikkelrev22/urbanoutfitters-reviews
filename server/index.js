const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { Reviews } = require('../db/index')
const cors = require('cors')

const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/reviews/:id', (req, res) => {
    Reviews.find({itemId: req.params.id}, (err, reviews) => {
        if (err) return res.status(500).send(err)
        res.status(200).send(reviews)
    })
})

app.listen(port, console.log(`listening on port${port}`))