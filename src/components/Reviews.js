import React , { Component }from 'react'
import Reviews_List from './Reviews_List/Reviews_List'
import Info_Bar from './Info_Bar/Info_Bar';

class Reviews extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      loading: true
    }
  }

  getReviews() {
    console.log('fetching reviews')
    fetch(`http://localhost:3000/reviews/${Math.floor(Math.random() * 100)}`)
    .then((reviews) => reviews.json())
    .then((reviews) => this.setState({
      'reviews': reviews,
      'loading': false
    }))
  }

  componentDidMount() {
    this.getReviews()
  }

  render() {
    const { loading } = this.state
    return (
      <div className="reviews-body">
        {loading ? (
            <div></div>
          ) : (
            <div>
              <h5>Reviews</h5>
              <Info_Bar reviews={this.state.reviews} />
              <Reviews_List reviews={this.state.reviews}/>
            </div>
          )}
      </div>
    )
  }
}

export default Reviews