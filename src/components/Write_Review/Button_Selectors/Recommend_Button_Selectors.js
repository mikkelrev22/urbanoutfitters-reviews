import React, { Component } from 'react'

class Recommend_Button_Selectors extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(boolean) {
        this.setState({
            selected: boolean
        }, () => this.props.handleInput('recommended', this.state.selected))
    }
    render() {
        return (
            <div className="woud-you-recommend">
                <p>Would you recommend this product to a friend?</p>    
                <br></br>                    
                <button onClick={() => this.handleChange(true)}>Yes</button>
                <button onClick={() => this.handleChange(false)}>No</button>
            </div>
        )
    }
}

export default Recommend_Button_Selectors