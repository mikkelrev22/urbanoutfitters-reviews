const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/reviews', {useMongoClient: true})

const reviewSchema = new mongoose.Schema({
    reviews: Object
    // itemId: Number,
    // itemName: String,
    // username: String,
    // location: String,
    // age: String,
    // height: String,
    // title: String,
    // body: String,
    // fit: Boolean,
    // sizePurchased: String,
    // sizeNormalyWorn: String,
    // recomended: Boolean,
    // date: Date
})

exports.Reviews = mongoose.model('Reviews', reviewSchema)