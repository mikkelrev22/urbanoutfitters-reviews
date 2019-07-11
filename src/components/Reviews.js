import React , { Component }from 'react'
import Info_Bar from './Info_Bar/Info_Bar';
import Write_Review from './Write_Review/Write_Review';
import Reviews_List from './Reviews_List/Reviews_List';

class Reviews extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      loading: true,
      itemId: 2
    }
  }
  componentDidMount() {
    this.getReviews()
  }
  getReviews() {
    console.log('fetching reviews')
    fetch(`http://localhost:3000/reviews/${this.state.itemId}`)
    .then((reviews) => reviews.json())
    .then((reviews) => this.setState({
      'reviews': reviews,
      'loading': false
    }))
  }
  handleSubmitReview(reviewObj) {
    fetch(`http://localhost:3000/reviews/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewObj)
    })
    .then(() => this.getReviews())
  }
  render() {
    const { loading } = this.state
    return (
      <div className="reviews-body">
        {loading ? (
            <div></div>
          ) : (
            <div>
              <br></br>
              <h5>Reviews</h5>
              <Info_Bar reviews={this.state.reviews} />
              <Reviews_List reviews={this.state.reviews}/>
              <Write_Review 
                itemId={this.state.itemId}
                itemName={this.state.reviews[0].itemName} 
                handleSubmitReview={this.handleSubmitReview.bind(this)}
              />
            </div>
          )}
      </div>
    )
  }
}

export default Reviews