import React, { Component } from 'react'
import Review_Print from './Reviews_Print';
import { fetch } from 'whatwg-fetch'

class Reviews_List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 0,
            reviews: [],
            loading: true,
            renderNextButton: false,
            renderPreviousButton: false
        }
    }
    componentDidMount() {
        const reviews = []
        let page = []
        for (let i = 0; i < this.props.reviews.length; i++) {
            if (page.length === 3) {
                reviews.push(page)
                page = []
            }
            else {
                page.push(this.props.reviews[i])
                if (i + 1 === this.props.reviews.length) reviews.push(page)
            }
        }

        let { renderNextButton } = this.state
        if (reviews.length > 1) renderNextButton = true

        this.setState({
            'reviews': reviews,
            'loading':false,
            'renderNextButton': renderNextButton
        })
    }
    handleNext() {
        let { page, renderNextButton, reviews } = this.state
        page = page + 1
        if (reviews[page + 1] === undefined) renderNextButton = false
        this.setState({
            'page': page,
            'renderNextButton': renderNextButton,
            'renderPreviousButton': true
        })
    }
    handlePrevious() {
        let { page, renderPreviousButton, reviews } = this.state
        page = page - 1
        if (reviews[page - 1] === undefined) renderPreviousButton = false
        this.setState({
            'page': page,
            'renderNextButton': true,
            'renderPreviousButton': renderPreviousButton
        })
    }
    render() {
        const { reviews, page, loading } = this.state
        return (
            loading ? (
                <div></div>
            ):(
                <Review_Print 
                    renderNextButton={this.state.renderNextButton}
                    renderPreviousButton={this.state.renderPreviousButton}
                    reviews={reviews[page]}
                    handleNext={this.handleNext.bind(this)} 
                    handlePrevious={this.handlePrevious.bind(this)}
                />
            )
        )
    }
}

export default Reviews_List