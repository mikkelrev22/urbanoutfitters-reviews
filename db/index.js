const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/reviews', {useMongoClient: true})

const reviewSchema = new mongoose.Schema({
    reviewId: Number,
    itemId: Number,
    itemName: String,
    username: String,
    location: String,
    age: String,
    height: String,
    title: String,
    body: String,
    fit: String,
    sizePurchased: String,
    sizeNormalyWorn: String,
    recommended: Boolean,
    date: Date,
    stars: Number
})

exports.Reviews = mongoose.model('Reviews', reviewSchema)