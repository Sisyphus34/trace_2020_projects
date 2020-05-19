import React, { Component } from 'react'
import './Ball.css'

class Ball extends Component {
    static defaultProps = {
        title: "Lotto",
        numBalls: 6,
        maxNum: 40,
    }

    render() {
        return (
            <div className="Ball">
                {this.props.num}
            </div>
        )
    }
}

export default Ball;