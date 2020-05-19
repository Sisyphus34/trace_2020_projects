import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    render() {
        let cls = `Die fas fa-dice-${this.props.face} ${this.props.rolling && 'Die-rolling'}`;
        return (

            <i className={cls}></i>
            // Below is example of in-line
            // <i className={`fas fa-dice-${this.props.face}`}></i>

        )
    }
}

export default Die;