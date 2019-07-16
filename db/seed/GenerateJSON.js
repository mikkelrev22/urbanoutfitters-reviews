const faker = require('faker');

exports.GenerateJSON = (numberOfItems, reviewsPerItem) => {
    const reviewsJSON = []
    for (let i = 0; i < numberOfItems; i++) {
        reviewsJSON.push({
            itemId: i,
            itemName: faker.commerce.productName(),
            reviews: GenerateReviews(reviewsPerItem)
        })          
    }
    return reviewsJSON
}

const GenerateReviews = (numberOfReviews) => {
    const ages = ['under 18','18-24', '25-34', '35+', '35-44', '45-54', '55-65', 'over 65', null]
    const heights = ['short', `4'1"`, `4'2"`, `4'3"`, `4'4"`, `4'4"`, `4'6"`, `4'7"`, `4'8"`, `4'9"`,`5'1"`, `5'2"`, `5'3"`, `5'4"`, `5'5"`, `5'6"`, `5'7"`, `5'8"`, `5'9"`, `6'1"`, `6'2"`, `6'3"`, `6'4"`, `6'6"`, `6'6"`, `6'7"`, `6'8"`, `6'9"`, `7'1"`, `7'2"`, `7'3"`, `7'4"`, `7'7"`, `7'6"`, `7'7"`, `7'8"`, `7'9"`, 'really really tall']
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    const stars = [1, 2, 3, 4, 5]
    const fits = ['runs small', 'true to size', 'true to size', 'true to size', 'true to size', 'true to size', 'runs large']
    const recommendations = [true, true, true, true, true, true, true, true, true, false]
    const get_random_Val_From_Array = (array) => array[Math.floor(Math.random() * array.length)]

    const reviewSet = []
    for (let r = 0; r < numberOfReviews; r++) {
        reviewSet.push({             
            username: faker.name.findName(),
            location: faker.address.city(),
            age: get_random_Val_From_Array(ages),
            height: get_random_Val_From_Array(heights),
            title: faker.lorem.lines(),
            body: faker.lorem.paragraphs(),
            fit: get_random_Val_From_Array(fits),
            sizePurchased: get_random_Val_From_Array(sizes),
            sizeNormalyWorn: get_random_Val_From_Array(sizes),
            recommended: get_random_Val_From_Array(recommendations),
            date: faker.date.past(),
            stars: get_random_Val_From_Array(stars)
        })
    }
    return reviewSet
}


