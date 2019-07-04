const faker = require('faker');

exports.GenerateJSON = () => {
    const reviewsJSON = {
        reviews:[]
    }

    const ages = ['under 18','18-24', '25-34', '35+', null]
    const heights = ['short', `4'1"`, `4'2"`, `4'3"`, `4'4"`, `4'4"`, `4'6"`, `4'7"`, `4'8"`, `4'9"`,`5'1"`, `5'2"`, `5'3"`, `5'4"`, `5'5"`, `5'6"`, `5'7"`, `5'8"`, `5'9"`, `6'1"`, `6'2"`, `6'3"`, `6'4"`, `6'6"`, `6'6"`, `6'7"`, `6'8"`, `6'9"`, `7'1"`, `7'2"`, `7'3"`, `7'4"`, `7'7"`, `7'6"`, `7'7"`, `7'8"`, `7'9"`, 'really really tall']
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    const get_random_Val_From_Array = (array) => array[Math.floor(Math.random() * array.length)]
    let id = 0
    for (let i = 0; i < 100; i++) {
        for (let r = 0; r < 3; r++) {
            reviewsJSON.reviews.push({
                reviewId: id,
                itemId: i,
                itemName: faker.commerce.productName(),
                username: faker.name.findName(),
                location: faker.address.city(),
                age: get_random_Val_From_Array(ages),
                height: get_random_Val_From_Array(heights),
                title: faker.lorem.lines(),
                body: faker.lorem.paragraphs(),
                fit: faker.random.boolean(),
                sizePurchased: get_random_Val_From_Array(sizes),
                sizeNormalyWorn: get_random_Val_From_Array(sizes),
                recomended: faker.random.boolean(),
                date: faker.date.past()
            })
            id = id + 1
        }
    }
    return reviewsJSON
}




