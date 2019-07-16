import React, { Component } from 'react'

class Fit_Button_Selectors extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedSize: null,
            styleSmall: null,
            styleTrue: null,
            styleLarge: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const selectedSize = e.target.name

        this.setState({
            selectedSize: selectedSize,
            styleSmall: selectedSize === 'runs small' ? 'selected' : null,
            styleTrue: selectedSize === 'true to size' ? 'selected' : null,
            styleLarge: selectedSize === 'runs large' ? 'selected' : null
        }, () => this.props.handleInput('fit', this.state.selectedSize))
    }
    render() {
        const { styleSmall, styleTrue, styleLarge } = this.state
        return (
            <div className="size-and-fit">
            <button name="runs small" className={styleSmall} onClick={this.handleChange}>Runs Small</button>
            <button name="true to size" className={styleTrue} onClick={this.handleChange}>True to Size</button>
            <button name="runs large" className={styleLarge} onClick={this.handleChange}>Runs Large</button>
            </div>
        )
    }
}

export default Fit_Button_Selectors