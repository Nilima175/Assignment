import React from 'react';
import { BUTTON_TYPE } from './Constant';
import IncrementButton from './IncrementButton';
import Value from './value';

export default class Incrementor extends React.Component{
constructor(){
    super();
    this.state = {
        value: 0
    }
}

 btnClickHandler = (type) =>{
     if (type === BUTTON_TYPE.INCREMENT){
        this.setState({
            ...this.state,
            value: this.state.value + 1
        })
 }
}
    render(){
        console.log(this.state.value);

    return (
        <>
        <Value value={this.state.value} />
        <IncrementButton onClick={this.btnClickHandler} />
        </>
    )
}
}