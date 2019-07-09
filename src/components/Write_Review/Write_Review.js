import React, { Component }from 'react'
import Button_Selectors from './Button_Selectors/Button_Selectors';
import Form_Review from './Form_Review/Form_Review';

class Write_Review extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // reviewId: id,
            // itemId: i,
            // itemName: faker.commerce.productName(),
            // username: faker.name.findName(),
            // location: faker.address.city(),
            // age: get_random_Val_From_Array(ages),
            // height: get_random_Val_From_Array(heights),
            // title: faker.lorem.lines(),
            // body: faker.lorem.paragraphs(),
            fit: '',
            // sizePurchased: get_random_Val_From_Array(sizes),
            // sizeNormalyWorn: get_random_Val_From_Array(sizes),
            recommended: '',
            // date: faker.date.past(),
            stars: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput(key, value) {
        this.setState({
            [key]: value
        })
    }
    handleSubmit(form) {
        //here I need to be able to asynchonously add all my form input
        //to the state, and then check if all the info has been filled out
        //if it has i need to make a post request otherwise alert the user
        for (let e in form) {
            this.handleInput(e, form[e])
        }
    }
    render() {
        return (
            <div className="write-review">
               <Button_Selectors handleInput={this.handleInput}/>  
               <Form_Review handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Write_Review