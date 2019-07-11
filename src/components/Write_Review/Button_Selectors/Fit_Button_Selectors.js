import React, { Component } from 'react'

class Fit_Button_Selectors extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            selected: e.target.name
        }, () => this.props.handleInput('fit', this.state.selected))
    }
    render() {
        return (
            <div className="size-and-fit">
            <button name="runs small" onClick={this.handleChange}>Runs Small</button>
            <button name="true to size" onClick={this.handleChange}>True to Size</button>
            <button name="runs large" onClick={this.handleChange}>Runs Large</button>
            </div>
        )
    }
}

export default Fit_Button_Selectors