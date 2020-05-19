import React, { Component } from 'react'
import './Ball.css'

class Ball extends Component {
    static defaultProps = {
        num: 0
    }
    render() {
        return (
            <div className="Ball">
                <p>
                    {this.props.num}
                </p>
            </div>
        )
    }
}

export default Ball;