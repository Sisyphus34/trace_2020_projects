import React, { Component } from 'react'
import './Lottery.css'
import Ball from './Ball'

class Lottery extends Component {

    render() {
        return (
            <div>
                <Ball />
                <Ball />
            </div>
        )
    }
}
export default Lottery;