import React, { Component } from 'react'

class Fit_Button_Selectors extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            selected: e.target.name
        }, () => this.props.handleInput('fit', this.state.selected))
    }
    render() {
        const { selected } = this.state
        return (
            <div className="size-and-fit">
                {selected === "runs small" ? (
                        <button name="runs small" className="button-selected" onClick={this.handleChange}>Runs Small</button>
                    ):(
                        <button name="runs small" onClick={this.handleChange}>Runs Small</button>
                )}
                {selected === "true to size" ? (
                        <button name="true to size" className="button-selected" onClick={this.handleChange}>True to Size</button>
                    ):(
                        <button name="true to size" onClick={this.handleChange}>True to Size</button>
                )}
                {selected === "runs large" ? (
                    <button name="runs large" className="button-selected" onClick={this.handleChange}>Runs Large</button>
                    ):(
                        <button name="runs large" onClick={this.handleChange}>Runs Large</button>
                )}
            </div>
        )
    }
}

export default Fit_Button_Selectors