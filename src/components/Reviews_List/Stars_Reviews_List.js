import React, { Component } from 'react' 
import StarRatings from 'react-star-ratings'

class Stars extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: props.stars
        }
    }
 
    render() {
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="black"
          numberOfStars={5}
          name='rating'
          starDimension='17px'
          starSpacing='0px'
        />
      );
    }
}

export default Stars