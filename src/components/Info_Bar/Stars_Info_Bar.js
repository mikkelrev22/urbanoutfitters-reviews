import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'

class Stars_Info_Bar extends Component {
    constructor(props) {
        super(props)
    }
    getAvgRating () {
        const starsArr = this.props.reviews.map(e => e.stars)
        return starsArr.reduce((a,b) => a + b, 0) / starsArr.length 
    }
    render() {
      const { reviews } = this.props
      return (
        <div className="box">
          <p className="grey">
          {this.getAvgRating().toFixed(1)} | {reviews.length} Reviews
          </p>
          <StarRatings
            rating={this.getAvgRating()}
            starRatedColor="black"
            numberOfStars={5}
            name='rating'
            starDimension='17px'
            starSpacing='0px'
          />
        </div>
      );
    }
}
    

export default Stars_Info_Bar