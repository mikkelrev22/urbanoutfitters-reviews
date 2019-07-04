const { Reviews } = require('../index')
const { GenerateJSON } = require('./GenerateJSON')

exports.SeedDB = () => {
    Reviews.create({ reviews: JSON.stringify(GenerateJSON()) }, (err, data) => {
        if (err) return console.log(err)
        console.log(data)
    })
}

console.log(this.SeedDB())