import React from 'react'

export default class Value extends React.Component {
    render() {
        const { value } = this.props;
        return (
            <p>Latest Value is: {value}</p>
        )
    }
}