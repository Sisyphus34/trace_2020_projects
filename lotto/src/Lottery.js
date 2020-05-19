import React, { Component } from 'react'
import './Lottery.css'
import Ball from './Ball'

class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            num: Array.from(this.props.numBalls)
        }
        // this.handleClick = this.handleClick.bind(this);
    }


    render() {
        // let randNum = Math.floor(Math.random() * this.props.num.length + 1);
        return (
            <section className="section">
                <div className="Lottery-container">
                    <h2>{this.props.title}</h2>
                    <div className="Lottery">
                        <div>
                            <Ball num={this.props.num} />
                        </div>
                    </div>
                    <button onClick={this.handleClick}>Generate</button>
                </div>
            </section>
        )
    };
}
export default Lottery;