import React from 'react'
import { BUTTON_TYPE } from './Constant';


export default class IncrementButton extends React.Component {

    handleButtonClick = function(e) {
        console.log(this);
        this.props.onClick(BUTTON_TYPE.INCREMENT);
    }
    render() {
        const {onClick} = this.props;

        
        return (
            <button onClick ={this.handleButtonClick.bind(this)} > Increment </button>
        )
    }
}