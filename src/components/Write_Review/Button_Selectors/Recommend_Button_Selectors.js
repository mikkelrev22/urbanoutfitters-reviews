import React, { Component } from 'react'

class Recommend_Button_Selectors extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(boolean) {
        this.setState({
            selected: boolean
        }, () => this.props.handleInput('recommended', this.state.selected))
    }
    render() {
        const { selected } = this.state
        return (
            <div className="woud-you-recommend">
                <p>Would you recommend thus product to a friend?</p>
                {selected === true ? (
                        <button className="button-selected" onClick={() => this.handleChange(true)}>Yes</button>
                    ):(
                        <button onClick={() => this.handleChange(true)}>Yes</button>
                )}
                {selected === false ? (
                        <button className="button-selected" onClick={() => this.handleChange(false)}>No</button>
                    ):(
                        <button onClick={() => this.handleChange(false)}>No</button>
                )}
            </div>
        )
    }
}

export default Recommend_Button_Selectors