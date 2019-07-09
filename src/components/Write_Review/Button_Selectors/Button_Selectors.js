import React from 'react'
import Stars_Button_Selectors from './Stars_Button_Selectors';
import Fit_Button_Selectors from './Fit_Button_Selectors';
import Recommend_Button_Selectors from './Recommend_Button_Selectors';

const Button_Selectors = (props) => (
    <div className="button-selectors">
        <Stars_Button_Selectors handleInput={props.handleInput}/>
        <Fit_Button_Selectors handleInput={props.handleInput}/>
        <Recommend_Button_Selectors handleInput={props.handleInput}/>
    </div>
)

export default Button_Selectors