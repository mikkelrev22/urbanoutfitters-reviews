const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { Reviews } = require('../db/index')
const path = require('path')
const cors = require('cors')

const port = 3456
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(bodyParser.json())

app.get('/:id', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '..', 'dist')})
})

app.get('/reviews/:id', (req, res) => {
    Reviews.find({itemId: req.params.id}).sort({date: -1}).exec((err, item) => {
        if (err) return res.status(500).send(err)
        res.status(200).send(item)
    })
})

app.patch('/reviews/:id', (req, res) => {
    Reviews.update({itemId: req.params.id},{$push: {reviews: req.body}}, (err, response) => {
        if (err) return res.status(500).send(err)
        res.status(200).send(response)
    })
})

app.listen(port, console.log(`listening on port${port}`))