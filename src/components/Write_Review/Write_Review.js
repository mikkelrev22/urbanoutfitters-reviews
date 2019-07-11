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
        this.verrifyInput = this.verrifyInput.bind(this)
    }
    handleInput(key, value) {
        this.setState({
            [key]: value
        })
    }
    handleSubmit(form) {
        const { username, location, age, height, title, 
            body, sizePurchased, sizeNormalyWorn} = form
        this.setState({
            itemId: this.props.itemId,
            itemName: this.props.itemName,
            username: username,
            location: location,
            age: age,
            height: height,
            title: title,
            body: body,
            sizePurchased: sizePurchased,
            sizeNormalyWorn: sizeNormalyWorn,
            date: new Date()   
        }, () => this.verrifyInput())
    }
    verrifyInput() {
        for (let e in this.state) {
            console.log(e,this.state[e])
            if (this.state[e].length === 0) return alert('please fill out all fields')
        }
        this.props.handleSubmitReview(this.state)
    }
    render() {
        return (
            <div className="write-review">
                <h2>Write a Review</h2>
                <p className="row">{this.props.itemName}</p>
               <Button_Selectors handleInput={this.handleInput}/> 
               <br></br> 
               <br></br>
               <Form_Review handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Write_Review